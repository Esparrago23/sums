import { Client } from 'pg';
import { DBConfig } from './config';

export async function ensureDatabaseForCurrentYear(cfg: DBConfig): Promise<void> {
  const currentYear = new Date().getFullYear();
  const now = new Date();
  const isLastDayOfYear = now.getMonth() === 11 && now.getDate() === 31;

  await ensureYearDatabase(cfg, currentYear);

  if (isLastDayOfYear) {
    const nextYear = currentYear + 1;
    await ensureYearDatabase(cfg, nextYear);
    console.log(`Creada base de datos para el siguiente año ${nextYear}`);
  }
}

async function ensureYearDatabase(cfg: DBConfig, year: number): Promise<void> {
  const dbName = `centro_medico_${year}`;
  const host = cfg.host.replace('-pooler', '');

  const client = new Client({
    host,
    port: cfg.port,
    user: cfg.user,
    password: cfg.password,
    database: 'postgres',
    ssl: cfg.sslmode !== 'disable',
  });

  await client.connect();

  const result = await client.query(
    'SELECT EXISTS(SELECT 1 FROM pg_database WHERE datname = $1)',
    [dbName]
  );

  const exists = result.rows[0].exists;

  if (!exists) {
    console.log(`Creando base de datos: ${dbName} desde plantilla ${cfg.template}`);

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await forceDisconnectTemplate(client, cfg.template);
        await new Promise(res => setTimeout(res, 1000 * attempt));

        await client.query(`CREATE DATABASE ${dbName} TEMPLATE ${cfg.template}`);
        console.log(`Base ${dbName} creada exitosamente en intento ${attempt}`);
        break;
      } catch (err) {
        console.error(`Intento ${attempt} fallido:`, err);
        if (attempt === 3) {
          throw new Error(`No se pudo crear la base ${dbName} después de 3 intentos`);
        }
      }
    }
  } else {
    console.log(`La base de datos ${dbName} ya existe`);
  }

  await client.end();
}

async function forceDisconnectTemplate(client: Client, templateName: string): Promise<void> {
  await client.query(`
    SELECT pg_terminate_backend(pid)
    FROM pg_stat_activity
    WHERE datname = $1
  `, [templateName]);

  await client.query(`ALTER DATABASE ${templateName} ALLOW_CONNECTIONS false`);
}
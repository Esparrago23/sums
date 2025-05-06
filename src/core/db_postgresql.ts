import { Pool, Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

interface DBConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  template: string;
  sslmode: string;
}

function loadDBConfig(): DBConfig {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    template: process.env.DB_TEMPLATE || '',
    sslmode: process.env.DB_SSLMODE || 'disable',
  };
}

class Conn_PostgreSQL {
  private pool: Pool;
  private config: DBConfig;

  private currentYear: number;

  constructor() {
    this.config = loadDBConfig();
    this.currentYear = new Date().getFullYear();
    this.pool = this.connectToCurrentYearDB();

    this.pool.on('connect', () => {
      console.log('Conexión establecida correctamente');
    });

    this.pool.on('error', (err) => {
      console.error('Error en la conexión a la base de datos:', err);
    });

    // Verificar cambio cada 2 minutos (para pruebas)
    setInterval(() => this.checkAndUpdateConnection(), 2 * 60 * 1000);
  }

  private async checkAndUpdateConnection(): Promise<void> {
    // Simulamos un cambio de año para pruebas
    const currentDate = new Date();
    const newYear = this.currentYear + (currentDate.getSeconds() >= 30 ? 1 : 0);
    if (newYear !== this.currentYear) {
      console.log(`Cambio de año detectado: ${this.currentYear} -> ${newYear}`);
      await this.ensureDatabaseForCurrentYear();
      
      // Cerrar todas las conexiones existentes
      await this.pool.end();
      
      // Crear nuevo pool para el nuevo año
      this.currentYear = newYear;
      this.pool = this.connectToCurrentYearDB();
      console.log(`Pool de conexiones actualizado para el año ${newYear}`);
    }
  }

  private connectToCurrentYearDB(): Pool {
    const year = new Date().getFullYear();
    const dbName = `centro_medico_${year}`;

    return new Pool({
      host: this.config.host,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password,
      database: dbName,
      ssl: {
        rejectUnauthorized: false, // necesario para Neon.tech
      },
      max: 10,
    });
  }

  async ensureDatabaseForCurrentYear(): Promise<void> {
    const currentYear = new Date().getFullYear();
    const now = new Date();
    const isLastDayOfYear = now.getMonth() === 11 && now.getDate() === 31;

    await this.ensureYearDatabase(currentYear);

    if (isLastDayOfYear) {
      const nextYear = currentYear + 1;
      await this.ensureYearDatabase(nextYear);
      console.log(`Creada base de datos para el siguiente año ${nextYear}`);
    }
  }

  private async ensureYearDatabase(year: number): Promise<void> {
    const dbName = `centro_medico_${year}`;
    const host = this.config.host.replace('-pooler', '');

    const client = new Client({
      host,
      port: this.config.port,
      user: this.config.user,
      password: this.config.password,
      database: 'postgres',
      ssl: this.config.sslmode !== 'disable',
    });

    await client.connect();

    const result = await client.query(
      'SELECT EXISTS(SELECT 1 FROM pg_database WHERE datname = $1)',
      [dbName]
    );

    const exists = result.rows[0].exists;

    if (!exists) {
      console.log(`Creando base de datos: ${dbName} desde plantilla ${this.config.template}`);

      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          await this.forceDisconnectTemplate(client, this.config.template);
          await new Promise(res => setTimeout(res, 1000 * attempt));

          await client.query(`CREATE DATABASE ${dbName} TEMPLATE ${this.config.template}`);
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

  private async forceDisconnectTemplate(client: Client, templateName: string): Promise<void> {
    await client.query(`
      SELECT pg_terminate_backend(pid)
      FROM pg_stat_activity
      WHERE datname = $1
    `, [templateName]);

    await client.query(`ALTER DATABASE ${templateName} ALLOW_CONNECTIONS false`);
  }

  async executePreparedQuery(query: string, values: any[]): Promise<any> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result;
    } catch (err) {
      console.error('Error al ejecutar la consulta preparada:', err);
      throw err;
    } finally {
      client.release();
    }
  }

  async fetchRows(query: string, values: any[]): Promise<any> {
    const client = await this.pool.connect();
    try {
      const result = await client.query(query, values);
      return result.rows;
    } catch (err) {
      console.error('Error al ejecutar la consulta SELECT:', err);
      throw err;
    } finally {
      client.release();
    }
  }
}

export const db = new Conn_PostgreSQL();
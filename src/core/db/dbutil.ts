import { Pool } from 'pg';
import { DBConfig } from '../config/dbConfig';
import { log } from '../../utils/logger';

export async function ensureDatabaseForCurrentYear(cfg: DBConfig): Promise<void> {
  const year = new Date().getFullYear();
  const dbName = `centro_medico_${year}`;

  const pool = new Pool({
    host: cfg.host.replace('-pooler', ''),
    port: cfg.port,
    user: cfg.user,
    password: cfg.password,
    database: 'postgres',
    ssl: {
      rejectUnauthorized: false
    }
  });

  try {
    const existsResult = await pool.query(
      'SELECT EXISTS(SELECT 1 FROM pg_database WHERE datname = $1)',
      [dbName]
    );
    
    const exists = existsResult.rows[0].exists;

    if (!exists) {
      log(`Creating new database: ${dbName} from template ${cfg.template}`);
      
      const maxAttempts = 3;
      for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
          await forceDisconnectTemplate(pool, cfg.template);
          await pool.query(`CREATE DATABASE ${dbName} TEMPLATE ${cfg.template}`);
          log(`Database ${dbName} created successfully on attempt ${attempt}`);
          return;
        } catch (error) {
          log(`Attempt ${attempt} failed: ${error}`);
          if (attempt === maxAttempts) {
            throw new Error(`Could not create database after ${maxAttempts} attempts`);
          }
          await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
      }
    } else {
      log(`Database ${dbName} already exists`);
    }
  } finally {
    await pool.end();
  }
}

async function forceDisconnectTemplate(pool: Pool, templateName: string): Promise<void> {
  const terminateQuery = `
    SELECT pg_terminate_backend(pid) 
    FROM pg_stat_activity 
    WHERE datname = $1`;

  await pool.query(terminateQuery, [templateName]);
  await pool.query(`ALTER DATABASE ${templateName} ALLOW_CONNECTIONS false`);
}
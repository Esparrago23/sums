import { Pool } from 'pg';
import { DBConfig } from '../config/dbConfig';

export async function connectToCurrentYearDB(cfg: DBConfig): Promise<Pool> {
  const year = new Date().getFullYear();
  const dbName = `centro_medico_${year}`;

  const pool = new Pool({
    host: cfg.host,
    port: cfg.port,
    user: cfg.user,
    password: cfg.password,
    database: cfg.template, // Usar la base de datos existente
    ssl: {
      rejectUnauthorized: false
    }
  });

  return pool;
}
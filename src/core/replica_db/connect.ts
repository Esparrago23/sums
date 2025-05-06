import { Pool } from 'pg';
import { DBConfig } from './config';

export function connectToCurrentYearDB(cfg: DBConfig): Pool {
  const year = new Date().getFullYear();
  const dbName = `centro_medico_${year}`;

  return new Pool({
    host: cfg.host,
    port: cfg.port,
    user: cfg.user,
    password: cfg.password,
    database: dbName,
    ssl: cfg.sslmode !== 'disable',
  });
}
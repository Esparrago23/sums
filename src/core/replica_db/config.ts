import dotenv from 'dotenv';

dotenv.config();

export interface DBConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  template: string;
  sslmode: string;
}

export function loadDBConfig(): DBConfig {
  return {
    host: process.env.DB_HOST_DB || 'localhost',
    port: parseInt(process.env.DB_PORT_DB || '5432', 10),
    user: process.env.DB_USER_DB || '',
    password: process.env.DB_PASSWORD_DB || '',
    template: process.env.DB_TEMPLATE_DB || '',
    sslmode: process.env.DB_SSLMODE_DB || 'disable',
  };
}
import dotenv from 'dotenv';
import { fatal } from '../../utils/logger';

export interface DBConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  template: string;
  sslMode: string;
}

export function loadDBConfig(): DBConfig {
  const result = dotenv.config();
  
  if (result.error) {
    fatal('Error loading .env file');
  }

  const port = parseInt(process.env.DB_PORT || '5432');
  if (isNaN(port)) {
    fatal('Invalid database port');
  }

  return {
    host: process.env.DB_HOST || '',
    port,
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    template: process.env.DB_SCHEMA || 'neondb', // Usar DB_SCHEMA en lugar de template
    sslMode: process.env.DB_SSLMODE || 'require',
  };
}
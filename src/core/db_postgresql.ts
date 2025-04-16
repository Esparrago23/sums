import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

class Conn_PostgreSQL {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_SCHEMA,
      port: parseInt(process.env.DB_PORT || '5433', 10),
      max: 10, // Número máximo de conexiones en el pool
    });

    this.pool.on('connect', () => {
      console.log('Conexión establecida correctamente');
    });

    this.pool.on('error', (err) => {
      console.error('Error en la conexión a la base de datos:', err);
    });
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
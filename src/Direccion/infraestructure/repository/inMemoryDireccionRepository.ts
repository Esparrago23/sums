import { Direccion } from '../../domain/entities/direccion';
import { IDireccionRepository } from '../../domain/repository/IDireccionRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryDireccionRepository implements IDireccionRepository {
  async create(direccion: Direccion): Promise<Direccion> {
    const query = `
      INSERT INTO direccion (calle, numero_exterior, colonia, municipio, entidad, codigo_postal)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [direccion.calle, direccion.numero_exterior, direccion.colonia, direccion.municipio, direccion.entidad, direccion.codigo_postal];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(direccion: Direccion): Promise<Direccion> {
    const query = `
      UPDATE direccion
      SET calle = $1, numero_exterior = $2, colonia = $3, municipio = $4, entidad = $5, codigo_postal = $6
      WHERE id = $7
      RETURNING *;
    `;
    const values = [direccion.calle, direccion.numero_exterior, direccion.colonia, direccion.municipio, direccion.entidad, direccion.codigo_postal, direccion.id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Direccion not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Direccion> {
    const query = `
      SELECT * FROM direccion
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Direccion not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM direccion
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Direccion[]> {
    const query = `
      SELECT * FROM direccion;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
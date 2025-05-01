import { Familia } from '../../domain/entities/familia';
import { IFamiliaRepository } from '../../domain/repositories/IFamiliaRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryFamiliaRepository implements IFamiliaRepository {
  async create(familia: Familia): Promise<Familia> {
    const query = `
      INSERT INTO familia (unidad_id, entrevistador_id, fecha_encuesta)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [familia.unidad_id, familia.entrevistador_id, familia.fecha_encuesta];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(familia: Familia): Promise<Familia> {
    const query = `
      UPDATE familia
      SET unidad_id = $1, entrevistador_id = $2, fecha_encuesta = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [familia.unidad_id, familia.entrevistador_id, familia.fecha_encuesta, familia.id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Familia not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Familia> {
    const query = `
      SELECT * FROM familia
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Familia not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM familia
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Familia[]> {
    const query = `
      SELECT * FROM familia;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
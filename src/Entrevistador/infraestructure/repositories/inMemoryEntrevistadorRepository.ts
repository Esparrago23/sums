import { Entrevistador } from '../../domain/entities/entrevistador';
import { IEntrevistadorRepository } from '../../domain/repositories/IEntrevistadorRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryEntrevistadorRepository implements IEntrevistadorRepository {
  async create(entrevistador: Entrevistador): Promise<Entrevistador> {
    const query = `
      INSERT INTO entrevistador (nombre, fecha_registro, unidad_salud_id, datos_laborales_id)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [entrevistador.nombre, entrevistador.fecha_registro, entrevistador.unidad_salud_id, entrevistador.datos_laborales_id];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(entrevistador: Entrevistador): Promise<Entrevistador> {
    const query = `
      UPDATE entrevistador
      SET nombre = $1, fecha_registro = $2, unidad_salud_id = $3, datos_laborales_id = $4
      WHERE id = $5
      RETURNING *;
    `;
    const values = [entrevistador.nombre, entrevistador.fecha_registro, entrevistador.unidad_salud_id, entrevistador.datos_laborales_id, entrevistador.id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Entrevistador not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Entrevistador | null> {
    const query = `
      SELECT * FROM entrevistador
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM entrevistador
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Entrevistador[]> {
    const query = `
      SELECT * FROM entrevistador;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}

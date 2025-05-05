// src/Entrevistador/infraestructure/repositories/inMemoryEntrevistadorRepository.ts
import { Entrevistador } from '../../domain/entities/entrevistador';
import { IEntrevistadorRepository } from '../../domain/repositories/IEntrevistadorRepository';
import { db } from '../../../core/db_postgresql';
import { formatDateForDB, parseDBDate } from '../../../core/date_utils';

export class InMemoryEntrevistadorRepository implements IEntrevistadorRepository {
  async create(entrevistador: Entrevistador): Promise<Entrevistador> {
    const query = `
      INSERT INTO rol (id, nombre_rol)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [
      entrevistador.id,
      entrevistador.nombre_rol
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(entrevistador: Entrevistador): Promise<Entrevistador> {
    const query = `
      UPDATE rol
      SET nombre_rol = $1
      WHERE id = $2
      RETURNING *;
    `;
    const values = [
      entrevistador.nombre_rol,
      entrevistador.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('rol not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Entrevistador | null> {
    const query = `
      SELECT * FROM rol
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
      DELETE FROM rol
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Entrevistador[]> {
    const query = `
      SELECT * FROM rol;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
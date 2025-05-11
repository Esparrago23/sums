// src/rol/infraestructure/repositories/inMemoryrolRepository.ts
import { Rol } from '../../domain/entities/entrevistador';
import { IRolRepository } from '../../domain/repositories/IEntrevistadorRepository';
import { db } from '../../../core/db_postgresql';
import { formatDateForDB, parseDBDate } from '../../../core/date_utils';

export class InMemoryrolRepository implements IRolRepository {
  async create(rol: Rol): Promise<Rol> {
    const query = `
      INSERT INTO rol (id, nombre_rol)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [
      rol.id,
      rol.nombre_rol
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(rol: Rol): Promise<Rol> {
    const query = `
      UPDATE rol
      SET nombre_rol = $1
      WHERE id = $2
      RETURNING *;
    `;
    const values = [
      rol.nombre_rol,
      rol.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('rol not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Rol | null> {
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

  async readAll(): Promise<Rol[]> {
    const query = `
      SELECT * FROM rol;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
import { Vacunacion } from '../../domain/entities/vacunacion';
import { Ivacunacion } from '../../domain/repositories/Ivacunacion';
import { db } from '../../../core/db_postgresql';

export class InMemoryVacunacionRepo implements Ivacunacion {
  async create(vacunacion: Vacunacion): Promise<Vacunacion> {
    const query = `
      INSERT INTO vacunacion (persona_id, fecha_aplicacion, dosis_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [
      vacunacion.persona_id,
      vacunacion.fecha_aplicacion,
      vacunacion.dosis_id
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(vacunacion: Vacunacion): Promise<Vacunacion> {
    const query = `
      UPDATE vacunacion
      SET persona_id = $1, fecha_aplicacion = $2, dosis_id = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [
      vacunacion.persona_id,
      vacunacion.fecha_aplicacion,
      vacunacion.dosis_id,
      vacunacion.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Vacunación no encontrada');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Vacunacion> {
    const query = `
      SELECT * FROM vacunacion
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Vacunación no encontrada');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM vacunacion
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Vacunacion[]> {
    const query = `
      SELECT * FROM vacunacion;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
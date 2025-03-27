import { Educacion } from "../../domain/entities/Educacion";
import { IEducacionRepo } from "../../domain/repositories/IEducacion_repo";
import { db } from '../../../core/db_postgresql';

export class InMemoryEducacionRepository implements IEducacionRepo {
  async create(educacion: Educacion): Promise<Educacion> {
    const query = `
      INSERT INTO educacion (persona_id, escolaridad, ocupacion)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [
      educacion.persona_id,
      educacion.escolaridad,
      educacion.ocupacion
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(educacion: Educacion): Promise<Educacion> {
    const query = `
      UPDATE educacion
      SET persona_id = $1, escolaridad = $2, ocupacion = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [
      educacion.persona_id,
      educacion.escolaridad,
      educacion.ocupacion,
      educacion.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error("Educacion not found");
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Educacion> {
    const query = `
      SELECT * FROM educacion
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error("Educacion not found");
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM educacion
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Educacion[]> {
    const query = `
      SELECT * FROM educacion;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}

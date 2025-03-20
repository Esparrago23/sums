import { UnidadSalud } from "../../domain/entities/UnidadSalud";
import { IUnidadSaludRepository } from "../../domain/repositories/IUnidadSaludRepository";
import { db } from "../../../core/db_postgresql";

export class InMemoryUnidadSaludRepository implements IUnidadSaludRepository {
  async create(unidadSalud: UnidadSalud): Promise<UnidadSalud> {
    const query = `
      INSERT INTO unidad_salud (clues, nombre, distrito, municipio, especialidad)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [unidadSalud.clues, unidadSalud.nombre, unidadSalud.distrito, unidadSalud.municipio, unidadSalud.especialidad];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(unidadSalud: UnidadSalud): Promise<UnidadSalud> {
    const query = `
      UPDATE unidad_salud
      SET clues = $1, nombre = $2, distrito = $3, municipio = $4, especialidad = $5
      WHERE id = $6
      RETURNING *;
    `;
    const values = [unidadSalud.clues, unidadSalud.nombre, unidadSalud.distrito, unidadSalud.municipio, unidadSalud.especialidad, unidadSalud.id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('UnidadSalud not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<UnidadSalud> {
    const query = `
      SELECT * FROM unidad_salud
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('UnidadSalud not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM unidad_salud
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<UnidadSalud[]> {
    const query = `
      SELECT * FROM unidad_salud;
    `;
    const result = await db.executePreparedQuery(query, []);
    console.log(result.rows);
    return result.rows;
  }
}
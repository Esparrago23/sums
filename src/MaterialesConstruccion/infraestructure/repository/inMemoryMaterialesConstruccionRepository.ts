import { MaterialesConstruccion } from "../../domain/entities/materialesContruccion";
import { IMaterialesConstruccionRepository } from "../../domain/repository/IMaterialesConstruccionRepository";
import { db } from '../../../core/db_postgresql';

export class InMemoryMaterialesConstruccionRepository implements IMaterialesConstruccionRepository {
  async create(materialesConstruccion: MaterialesConstruccion): Promise<MaterialesConstruccion> {
    const query = `
      INSERT INTO materiales_vivienda (vivienda_id, tipo, material, especificacion)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [
      materialesConstruccion.vivienda_id,
      materialesConstruccion.tipo,
      materialesConstruccion.material,
      materialesConstruccion.especificacion
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(materialesConstruccion: MaterialesConstruccion): Promise<MaterialesConstruccion> {
    const query = `
      UPDATE materiales_vivienda
      SET vivienda_id = $1, tipo = $2, material = $3, especificacion = $4
      WHERE id = $5
      RETURNING *;
    `;
    const values = [
      materialesConstruccion.vivienda_id,
      materialesConstruccion.tipo,
      materialesConstruccion.material,
      materialesConstruccion.especificacion,
      materialesConstruccion.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Materiales de construcción not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<MaterialesConstruccion> {
    const query = `
      SELECT * FROM materiales_vivienda
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Materiales de construcción not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM materiales_vivienda
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<MaterialesConstruccion[]> {
    const query = `
      SELECT * FROM materiales_vivienda;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
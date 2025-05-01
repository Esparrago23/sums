import { MaterialesVivienda } from '../../domain/entities/materialesVivienda';
import { IMaterialesViviendaRepository } from '../../domain/repository/IMaterialesViviendaRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryMaterialesViviendaRepository implements IMaterialesViviendaRepository {
  async create(materialesVivienda: MaterialesVivienda): Promise<MaterialesVivienda> {
    const query = `
      INSERT INTO materiales_vivienda (vivienda_id, tipo, material, especificacion)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [materialesVivienda.vivienda_id, materialesVivienda.tipo, materialesVivienda.material, materialesVivienda.especificacion];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(materialesVivienda: MaterialesVivienda): Promise<MaterialesVivienda> {
    const query = `
      UPDATE materiales_vivienda
      SET vivienda_id = $1, tipo = $2, material = $3, especificacion = $4
      WHERE id = $5
      RETURNING *;
    `;
    const values = [materialesVivienda.vivienda_id, materialesVivienda.tipo, materialesVivienda.material, materialesVivienda.especificacion, materialesVivienda.id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('MaterialesVivienda not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<MaterialesVivienda> {
    const query = `
      SELECT * FROM materiales_vivienda
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('MaterialesVivienda not found');
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

  async readAll(): Promise<MaterialesVivienda[]> {
    const query = `
      SELECT * FROM materiales_vivienda;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
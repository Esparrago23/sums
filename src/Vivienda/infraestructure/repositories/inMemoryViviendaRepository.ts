import { Vivienda } from '../../domain/entities/vivienda';
import { IViviendaRepository } from '../../domain/repositories/IViviendaRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryViviendaRepository implements IViviendaRepository {
  async create(vivienda: Vivienda): Promise<Vivienda> {
    const query = `
      INSERT INTO vivienda (familia_id, direccion_id, materiales_id, servicios_basicos_id, cocina_con_leña, numero_cuartos, numero_habitantes)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [
      vivienda.familia_id,
      vivienda.direccion_id,
      vivienda.materiales_id,
      vivienda.servicios_basicos_id,
      vivienda.cocina_con_leña,
      vivienda.numero_cuartos,
      vivienda.numero_habitantes
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(vivienda: Vivienda): Promise<Vivienda> {
    const query = `
      UPDATE vivienda
      SET familia_id = $1, direccion_id = $2, materiales_id = $3, servicios_basicos_id = $4, 
          cocina_con_leña = $5, numero_cuartos = $6, numero_habitantes = $7
      WHERE id = $8
      RETURNING *;
    `;
    const values = [
      vivienda.familia_id,
      vivienda.direccion_id,
      vivienda.materiales_id,
      vivienda.servicios_basicos_id,
      vivienda.cocina_con_leña,
      vivienda.numero_cuartos,
      vivienda.numero_habitantes,
      vivienda.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Vivienda not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Vivienda> {
    const query = `
      SELECT * FROM vivienda
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Vivienda not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM vivienda
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Vivienda[]> {
    const query = `
      SELECT * FROM vivienda;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}

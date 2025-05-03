import { Vivienda } from '../../domain/entities/vivienda';
import { IViviendaRepository } from '../../domain/repositories/IViviendaRepository';
import { db } from '../../../core/db_postgresql';
import { formatDateForDB, parseDBDate } from '../../../core/date_utils';

export class InMemoryViviendaRepository implements IViviendaRepository {
  async create(vivienda: Vivienda): Promise<Vivienda> {
    const query = `
      INSERT INTO vivienda (familia_id, direccion_id, servicios_basicos_id, cocina_con_leña, numero_cuartos, numero_habitantes)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [
      vivienda.familia_id,
      vivienda.direccion_id,
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
      SET familia_id = $1, direccion_id = $2, servicios_basicos_id = $3, 
          cocina_con_leña = $4, numero_cuartos = $5, numero_habitantes = $6
      WHERE id = $7
      RETURNING *;
    `;
    const values = [
      vivienda.familia_id,
      vivienda.direccion_id,
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
    return result.rows.map((row: any) => {
      return row;
    });
  }
}
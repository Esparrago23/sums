import { ServiciosBasicos } from '../../domain/entities/serviciosBasicos';
import { IServiciosBasicosRepository } from '../../domain/repository/IServiciosBasicosRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryServiciosBasicosRepository implements IServiciosBasicosRepository {
  async create(serviciosBasicos: ServiciosBasicos): Promise<ServiciosBasicos> {
    const query = `
      INSERT INTO servicios_basicos (cocina_separada, energia_electrica, agua_entubada, drenaje, wc, letrina, alas_de_suelo, fosa_septica)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    const values = [
      serviciosBasicos.cocina_separada,
      serviciosBasicos.energia_electrica,
      serviciosBasicos.agua_entubada,
      serviciosBasicos.drenaje,
      serviciosBasicos.wc,
      serviciosBasicos.letrina,
      serviciosBasicos.alas_de_suelo,
      serviciosBasicos.fosa_septica
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(serviciosBasicos: ServiciosBasicos): Promise<ServiciosBasicos> {
    const query = `
      UPDATE servicios_basicos
      SET cocina_separada = $1, energia_electrica = $2, agua_entubada = $3, drenaje = $4, 
          wc = $5, letrina = $6, alas_de_suelo = $7, fosa_septica = $8
      WHERE id = $9
      RETURNING *;
    `;
    const values = [
      serviciosBasicos.cocina_separada,
      serviciosBasicos.energia_electrica,
      serviciosBasicos.agua_entubada,
      serviciosBasicos.drenaje,
      serviciosBasicos.wc,
      serviciosBasicos.letrina,
      serviciosBasicos.alas_de_suelo,
      serviciosBasicos.fosa_septica,
      serviciosBasicos.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Servicios Básicos not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<ServiciosBasicos> {
    const query = `
      SELECT * FROM servicios_basicos
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Servicios Básicos not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM servicios_basicos
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<ServiciosBasicos[]> {
    const query = `
      SELECT * FROM servicios_basicos;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}

import { DatosLaborales } from '../../domain/entities/datosLaborales';
import { IDatosLaboralesRepository } from '../../domain/repositories/IDatosLaboralesRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryDatosLaboralesRepository implements IDatosLaboralesRepository {
  async create(datosLaborales: DatosLaborales): Promise<DatosLaborales> {
    const query = `
      INSERT INTO datos_laborales (turnos, horario, rango_horario, cargo)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [datosLaborales.turnos, datosLaborales.horario, datosLaborales.rango_horario, datosLaborales.cargo];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(datosLaborales: DatosLaborales): Promise<DatosLaborales> {
    const query = `
      UPDATE datos_laborales
      SET turnos = $1, horario = $2, rango_horario = $3, cargo = $4
      WHERE id = $5
      RETURNING *;
    `;
    const values = [datosLaborales.turnos, datosLaborales.horario, datosLaborales.rango_horario, datosLaborales.cargo, datosLaborales.id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('DatosLaborales not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<DatosLaborales> {
    const query = `
      SELECT * FROM datos_laborales
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('DatosLaborales not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM datos_laborales
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<DatosLaborales[]> {
    const query = `
      SELECT * FROM datos_laborales;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
import { Familia } from '../../domain/entities/familia';
import { IFamiliaRepository } from '../../domain/repositories/IFamiliaRepository';
import { db } from '../../../core/db_postgresql';
import { formatDateForDB, parseDBDate } from '../../../core/date_utils';

export class InMemoryFamiliaRepository implements IFamiliaRepository {
  async create(familia: Familia): Promise<Familia> {
    const query = `
      INSERT INTO familia (unidad_id, entrevistador_id, fecha_encuesta)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [
      familia.unidad_id,
      familia.entrevistador_id,
      formatDateForDB(familia.fecha_encuesta)
    ];
    const result = await db.executePreparedQuery(query, values);

    // Parsear la fecha en el resultado
    const savedFamilia = result.rows[0];
    savedFamilia.fecha_encuesta = parseDBDate(savedFamilia.fecha_encuesta);
    return savedFamilia;
  }

  async update(familia: Familia): Promise<Familia> {
    const query = `
      UPDATE familia
      SET unidad_id = $1, entrevistador_id = $2, fecha_encuesta = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [
      familia.unidad_id,
      familia.entrevistador_id,
      formatDateForDB(familia.fecha_encuesta),
      familia.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Familia not found');
    }

    // Parsear la fecha en el resultado
    const updatedFamilia = result.rows[0];
    updatedFamilia.fecha_encuesta = parseDBDate(updatedFamilia.fecha_encuesta);
    return updatedFamilia;
  }

  async readById(id: number): Promise<Familia> {
    const query = `
      SELECT * FROM familia
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Familia not found');
    }

    // Parsear la fecha en el resultado
    const familia = result.rows[0];
    familia.fecha_encuesta = parseDBDate(familia.fecha_encuesta);
    return familia;
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM familia
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Familia[]> {
    const query = `
      SELECT * FROM familia;
    `;
    const result = await db.executePreparedQuery(query, []);

    // Parsear las fechas en los resultados
    return result.rows.map((row: any) => {
      row.fecha_encuesta = parseDBDate(row.fecha_encuesta);
      return row;
    });
  }
}
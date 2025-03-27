import { MiembroFamilia } from '../../domain/entities/miembroFamilia';
import { IMiembroFamiliaRepository } from '../../domain/repositories/IMiembroFamiliaRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryMiembroFamiliaRepository implements IMiembroFamiliaRepository {
  async create(miembroFamilia: MiembroFamilia): Promise<MiembroFamilia> {
    const query = `
      INSERT INTO miembro_familia (datos_personales_id, salud_id, educacion_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [
      miembroFamilia.datos_personales_id,
      miembroFamilia.salud_id,
      miembroFamilia.educacion_id
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(miembroFamilia: MiembroFamilia): Promise<MiembroFamilia> {
    const query = `
      UPDATE miembro_familia
      SET datos_personales_id = $1, salud_id = $2, educacion_id = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [
      miembroFamilia.datos_personales_id,
      miembroFamilia.salud_id,
      miembroFamilia.educacion_id,
      miembroFamilia.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Miembro de familia not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<MiembroFamilia> {
    const query = `
      SELECT * FROM miembro_familia
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Miembro de familia not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM miembro_familia
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<MiembroFamilia[]> {
    const query = `
      SELECT * FROM miembro_familia;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
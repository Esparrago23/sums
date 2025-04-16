import { ISaludFamiliarRepository } from "../../domain/repositories/ISaludFamiliarRepository";
import { SaludFamiliar } from "../../domain/entities/SaludFamiliar";
import { db } from '../../../core/db_postgresql';

export class InMemorySaludFamiliarRepository implements ISaludFamiliarRepository {
  async create(saludFamiliar: SaludFamiliar): Promise<SaludFamiliar> {
    const query = `
      INSERT INTO salud_familiar (
        persona_id, seguridad_social, enfermedades, embarazo_atencion, 
        alimentacion, higiene_familiar, alcoholismo, tabaquismo, 
        tamizaje_cervico_uterino, tamizaje_cancer_mama, discapacidad, 
        servicio_salud_frecuencia, motivo_uso_servicio_salud
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING *;
    `;
    const values = [
      saludFamiliar.persona_id,
      saludFamiliar.seguridad_social,
      saludFamiliar.enfermedades,
      saludFamiliar.embarazo_atencion,
      saludFamiliar.alimentacion,
      saludFamiliar.higiene_familiar,
      saludFamiliar.alcoholismo,
      saludFamiliar.tabaquismo,
      saludFamiliar.tamizaje_cervico_uterino,
      saludFamiliar.tamizaje_cancer_mama,
      saludFamiliar.discapacidad,
      saludFamiliar.servicio_salud_frecuencia,
      saludFamiliar.motivo_uso_servicio_salud
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(saludFamiliar: SaludFamiliar): Promise<SaludFamiliar> {
    const query = `
      UPDATE salud_familiar
      SET persona_id = $1, seguridad_social = $2, enfermedades = $3, 
          embarazo_atencion = $4, alimentacion = $5, higiene_familiar = $6,
          alcoholismo = $7, tabaquismo = $8, tamizaje_cervico_uterino = $9,
          tamizaje_cancer_mama = $10, discapacidad = $11,
          servicio_salud_frecuencia = $12, motivo_uso_servicio_salud = $13
      WHERE id = $14
      RETURNING *;
    `;
    const values = [
      saludFamiliar.persona_id,
      saludFamiliar.seguridad_social,
      saludFamiliar.enfermedades,
      saludFamiliar.embarazo_atencion,
      saludFamiliar.alimentacion,
      saludFamiliar.higiene_familiar,
      saludFamiliar.alcoholismo,
      saludFamiliar.tabaquismo,
      saludFamiliar.tamizaje_cervico_uterino,
      saludFamiliar.tamizaje_cancer_mama,
      saludFamiliar.discapacidad,
      saludFamiliar.servicio_salud_frecuencia,
      saludFamiliar.motivo_uso_servicio_salud,
      saludFamiliar.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Salud Familiar not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<SaludFamiliar> {
    const query = `
      SELECT * FROM salud_familiar
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Salud Familiar not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM salud_familiar
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<SaludFamiliar[]> {
    const query = `
      SELECT * FROM salud_familiar;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}

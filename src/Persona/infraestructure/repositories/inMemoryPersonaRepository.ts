import { Persona } from '../../domain/entities/Persona';
import { IPersonaRepository } from '../../domain/repositories/IPersonaRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryPersonaRepository implements IPersonaRepository {
  async create(persona: Persona): Promise<Persona> {
    const query = `
      INSERT INTO persona (familia_id, nombre_completo, fecha_nacimiento, edad, sexo, 
        estado_civil, escolaridad, lengua, alfabetizacion, parentesco, ocupacion, 
        ingreso, seguridad_social, discapacidad, tipo_discapacidad)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
      RETURNING *;
    `;
    const values = [
      persona.familia_id,
      persona.nombre_completo,
      persona.fecha_nacimiento,
      persona.edad,
      persona.sexo,
      persona.estado_civil,
      persona.escolaridad,
      persona.lengua,
      persona.alfabetizacion,
      persona.parentesco,
      persona.ocupacion,
      persona.ingreso,
      persona.seguridad_social,
      persona.discapacidad,
      persona.tipo_discapacidad
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(persona: Persona): Promise<Persona> {
    const query = `
      UPDATE persona
      SET familia_id = $1, nombre_completo = $2, fecha_nacimiento = $3, edad = $4, 
          sexo = $5, estado_civil = $6, escolaridad = $7, lengua = $8, 
          alfabetizacion = $9, parentesco = $10, ocupacion = $11, ingreso = $12, 
          seguridad_social = $13, discapacidad = $14, tipo_discapacidad = $15
      WHERE id = $16
      RETURNING *;
    `;
    const values = [
      persona.familia_id,
      persona.nombre_completo,
      persona.fecha_nacimiento,
      persona.edad,
      persona.sexo,
      persona.estado_civil,
      persona.escolaridad,
      persona.lengua,
      persona.alfabetizacion,
      persona.parentesco,
      persona.ocupacion,
      persona.ingreso,
      persona.seguridad_social,
      persona.discapacidad,
      persona.tipo_discapacidad,
      persona.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Persona not found');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Persona> {
    const query = `
      SELECT * FROM persona
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Persona not found');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM persona
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Persona[]> {
    const query = `
      SELECT * FROM persona;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
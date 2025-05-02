import { Persona } from '../../domain/entities/Persona';
import { IPersonaRepository } from '../../domain/repositories/IPersonaRepository';
import { db } from '../../../core/db_postgresql';
import { formatDateForDB, parseDBDate } from '../../../core/date_utils';

export class InMemoryPersonaRepository implements IPersonaRepository {
  async create(persona: Persona): Promise<Persona> {
    const query = `
      INSERT INTO persona (familia_id, fecha_nacimiento, edad, sexo, 
        escolaridad, lengua, alfabetizacion, parentesco, ocupacion, 
        ingreso, seguridad_social, discapacidad, tipo_discapacidad,
        primer_nombre, segundo_nombre, apellido_paterno, apellido_materno)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)
      RETURNING *;
    `;
    const values = [
      persona.familia_id,
      formatDateForDB(persona.fecha_nacimiento),
      persona.edad,
      persona.sexo,
      persona.escolaridad,
      persona.lengua,
      persona.alfabetizacion,
      persona.parentesco,
      persona.ocupacion,
      persona.ingreso,
      persona.seguridad_social,
      persona.discapacidad,
      persona.tipo_discapacidad,
      persona.primer_nombre,
      persona.segundo_nombre,
      persona.apellido_paterno,
      persona.apellido_materno
    ];
    const result = await db.executePreparedQuery(query, values);

    // Parsear la fecha en el resultado
    const savedPersona = result.rows[0];
    savedPersona.fecha_nacimiento = parseDBDate(savedPersona.fecha_nacimiento);
    return savedPersona;
  }

  async update(persona: Persona): Promise<Persona> {
    const query = `
      UPDATE persona
      SET familia_id = $1, fecha_nacimiento = $2, edad = $3, 
          sexo = $4, escolaridad = $5, lengua = $6, 
          alfabetizacion = $7, parentesco = $8, ocupacion = $9, ingreso = $10, 
          seguridad_social = $11, discapacidad = $12, tipo_discapacidad = $13,
          primer_nombre = $14, segundo_nombre = $15, apellido_paterno = $16,
          apellido_materno = $17
      WHERE id = $18
      RETURNING *;
    `;
    const values = [
      persona.familia_id,
      formatDateForDB(persona.fecha_nacimiento),
      persona.edad,
      persona.sexo,
      persona.escolaridad,
      persona.lengua,
      persona.alfabetizacion,
      persona.parentesco,
      persona.ocupacion,
      persona.ingreso,
      persona.seguridad_social,
      persona.discapacidad,
      persona.tipo_discapacidad,
      persona.primer_nombre,
      persona.segundo_nombre,
      persona.apellido_paterno,
      persona.apellido_materno,
      persona.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Persona not found');
    }

    // Parsear la fecha en el resultado
    const updatedPersona = result.rows[0];
    updatedPersona.fecha_nacimiento = parseDBDate(updatedPersona.fecha_nacimiento);
    return updatedPersona;
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

    // Parsear la fecha en el resultado
    const persona = result.rows[0];
    persona.fecha_nacimiento = parseDBDate(persona.fecha_nacimiento);
    return persona;
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

    // Parsear las fechas en los resultados
    return result.rows.map((row: any) => {
      row.fecha_nacimiento = parseDBDate(row.fecha_nacimiento);
      return row;
    });
  }
}
import { Vacunacion } from '../../domain/entities/vacunacion';
import { Ivacunacion } from '../../domain/repositories/Ivacunacion';
import {
  VacunaDosisAplicacionDTO,
  VacunacionPorRangoEdadDTO,
  VacunacionPorSexoDTO,
  PersonasVacunadasPorVacunaDTO,
  AplicacionesPorAnioVacunaDTO,
  DosisPorPersonaDTO
} from '../../domain/entities/consultas';
import { db } from '../../../core/db_postgresql';

export class InMemoryVacunacionRepo implements Ivacunacion {
  async create(vacunacion: Vacunacion): Promise<Vacunacion> {
    const query = `
      INSERT INTO vacunacion (persona_id, fecha_aplicacion, dosis_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [
      vacunacion.persona_id,
      vacunacion.fecha_aplicacion,
      vacunacion.dosis_id
    ];
    const result = await db.executePreparedQuery(query, values);
    return result.rows[0];
  }

  async update(vacunacion: Vacunacion): Promise<Vacunacion> {
    const query = `
      UPDATE vacunacion
      SET persona_id = $1, fecha_aplicacion = $2, dosis_id = $3
      WHERE id = $4
      RETURNING *;
    `;
    const values = [
      vacunacion.persona_id,
      vacunacion.fecha_aplicacion,
      vacunacion.dosis_id,
      vacunacion.id
    ];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Vacunación no encontrada');
    }
    return result.rows[0];
  }

  async readById(id: number): Promise<Vacunacion> {
    const query = `
      SELECT * FROM vacunacion
      WHERE id = $1;
    `;
    const values = [id];
    const result = await db.executePreparedQuery(query, values);
    if (result.rowCount === 0) {
      throw new Error('Vacunación no encontrada');
    }
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    const query = `
      DELETE FROM vacunacion
      WHERE id = $1;
    `;
    const values = [id];
    await db.executePreparedQuery(query, values);
  }

  async readAll(): Promise<Vacunacion[]> {
    const query = `
      SELECT * FROM vacunacion;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
  async getAplicacionesPorVacunaYDosis(): Promise<VacunaDosisAplicacionDTO[]> {
    const query = `
      SELECT
        v.nombre AS vacuna,
        d.nombre AS tipo_dosis,
        COUNT(*) AS total_aplicaciones
      FROM vacunacion va
      JOIN dosis d ON va.dosis_id = d.id
      JOIN vacunas v ON d.vacuna_id = v.id
      GROUP BY v.nombre, d.nombre
      ORDER BY v.nombre, d.nombre;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }

  async getAplicacionesPorPersona(personaId: number): Promise<VacunaDosisAplicacionDTO[]> {
    const query = `
      SELECT
        v.nombre AS vacuna,
        d.nombre AS tipo_dosis,
        COUNT(*) AS total_aplicaciones
      FROM vacunacion va
      JOIN dosis d ON va.dosis_id = d.id
      JOIN vacunas v ON d.vacuna_id = v.id
      WHERE va.persona_id = $1
      GROUP BY v.nombre, d.nombre
      ORDER BY v.nombre, d.nombre;
    `;
    const result = await db.executePreparedQuery(query, [personaId]);
    return result.rows;
  }

  async getPersonasVacunadasPorVacuna(): Promise<PersonasVacunadasPorVacunaDTO[]> {
    const query = `
      SELECT
        v.nombre AS vacuna,
        COUNT(DISTINCT va.persona_id) AS personas_vacunadas
      FROM vacunacion va
      JOIN dosis d ON va.dosis_id = d.id
      JOIN vacunas v ON d.vacuna_id = v.id
      GROUP BY v.nombre
      ORDER BY v.nombre;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }

  async getAplicacionesPorAnioYVacuna(): Promise<AplicacionesPorAnioVacunaDTO[]> {
    const query = `
      SELECT
        EXTRACT(YEAR FROM va.fecha_aplicacion) AS año,
        v.nombre AS vacuna,
        COUNT(*) AS total
      FROM vacunacion va
      JOIN dosis d ON va.dosis_id = d.id
      JOIN vacunas v ON d.vacuna_id = v.id
      GROUP BY año, v.nombre
      ORDER BY año, v.nombre;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }

  async getVacunacionPorSexo(): Promise<VacunacionPorSexoDTO[]> {
    const query = `
      SELECT
        p.sexo,
        v.nombre AS vacuna,
        COUNT(*) AS total_aplicaciones
      FROM vacunacion va
      JOIN dosis d ON va.dosis_id = d.id
      JOIN vacunas v ON d.vacuna_id = v.id
      JOIN persona p ON va.persona_id = p.id
      GROUP BY p.sexo, v.nombre
      ORDER BY p.sexo, v.nombre;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }

  async getVacunacionPorRangoEdad(): Promise<VacunacionPorRangoEdadDTO[]> {
    const query = `
      SELECT
        CASE
          WHEN p.edad < 18 THEN 'Menores de edad'
          WHEN p.edad BETWEEN 18 AND 49 THEN 'Adultos'
          ELSE 'Adultos mayores'
        END AS rango_edad,
        v.nombre AS vacuna,
        COUNT(*) AS total_aplicaciones
      FROM vacunacion va
      JOIN dosis d ON va.dosis_id = d.id
      JOIN vacunas v ON d.vacuna_id = v.id
      JOIN persona p ON va.persona_id = p.id
      GROUP BY rango_edad, v.nombre
      ORDER BY rango_edad, v.nombre;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }

  async getDosisAplicadasPorPersona(): Promise<DosisPorPersonaDTO[]> {
    const query = `
      SELECT
        p.nombre_completo,
        COUNT(*) AS total_dosis_aplicadas
      FROM vacunacion va
      JOIN persona p ON va.persona_id = p.id
      GROUP BY p.nombre_completo
      ORDER BY total_dosis_aplicadas DESC;
    `;
    const result = await db.executePreparedQuery(query, []);
    return result.rows;
  }
}
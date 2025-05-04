import { ServicioSalud, Visita } from "../../domain/entities/serviciosSalud";
import { IServicioSaludRepository} from "../../domain/repositories/IServiciosSaludRepository";
import { db } from '../../../core/db_postgresql';

export class InMemoryServicioSaludRepository implements IServicioSaludRepository {
    async create(servicioSalud: ServicioSalud): Promise<ServicioSalud> {
        const query = `
      INSERT INTO servicios_salud (persona_id, visitas, frecuencia)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
        const values = [
            servicioSalud.persona_id,
            servicioSalud.visitas,
            servicioSalud.frecuencia
        ];
        const result = await db.executePreparedQuery(query, values);
        return result.rows[0];
    }

    async update(servicioSalud: ServicioSalud): Promise<ServicioSalud> {
        const query = `
      UPDATE servicios_salud
      SET persona_id = $1, visitas = $2, frecuencia = $3
      WHERE id = $4
      RETURNING *;
    `;
        const values = [
            servicioSalud.persona_id,
            servicioSalud.visitas,
            servicioSalud.frecuencia,
            servicioSalud.id
        ];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Servicio de salud not found');
        }
        return result.rows[0];
    }

    async readById(id: number): Promise<ServicioSalud> {
        const query = `
      SELECT * FROM servicios_salud
      WHERE id = $1;
    `;
        const values = [id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Servicio de salud not found');
        }
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        const query = `
      DELETE FROM servicios_salud
      WHERE id = $1;
    `;
        const values = [id];
        await db.executePreparedQuery(query, values);
    }

    async readAll(): Promise<ServicioSalud[]> {
        const query = `
      SELECT * FROM servicios_salud;
    `;
        const result = await db.executePreparedQuery(query, []);
        return result.rows;
    }

    async agregarVisita(servicioId: number, visita: Visita): Promise<ServicioSalud> {
        // Primero obtenemos el servicio actual
        const servicio = await this.readById(servicioId);
        
        // Actualizamos el array de visitas
        const query = `
      UPDATE servicios_salud
      SET visitas = visitas || $1::jsonb
      WHERE id = $2
      RETURNING *;
    `;
        const values = [
            JSON.stringify([visita]),
            servicioId
        ];
        
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Servicio de salud not found');
        }
        return result.rows[0];
    }

    async eliminarVisita(servicioId: number, fecha: string): Promise<ServicioSalud> {
        // Primero obtenemos el servicio actual
        const servicio = await this.readById(servicioId);
        
        // Actualizamos el array de visitas, eliminando la que coincide con la fecha
        const query = `
      UPDATE servicios_salud
      SET visitas = (
        SELECT jsonb_agg(v) 
        FROM jsonb_array_elements(visitas) AS v 
        WHERE v->>'fecha' != $1
      )
      WHERE id = $2
      RETURNING *;
    `;
        const values = [
            fecha,
            servicioId
        ];
        
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Servicio de salud not found');
        }
        return result.rows[0];
    }

    async obtenerVisitasPorTipo(servicioId: number, tipo: string): Promise<Visita[]> {
        const query = `
      SELECT jsonb_array_elements(visitas) AS visita
      FROM servicios_salud
      WHERE id = $1 AND jsonb_array_elements(visitas)->>'tipo' = $2;
    `;
        const values = [
            servicioId,
            tipo
        ];
        
        const result = await db.executePreparedQuery(query, values);
        return result.rows.map((row: { visita: Visita }) => row.visita);
    }

    async obtenerUltimaVisita(servicioId: number): Promise<Visita | null> {
        const query = `
      SELECT visitas[array_length(visitas, 1)] AS ultima_visita
      FROM servicios_salud
      WHERE id = $1 AND array_length(visitas, 1) > 0;
    `;
        const values = [servicioId];
        
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0 || !result.rows[0].ultima_visita) {
            return null;
        }
        return result.rows[0].ultima_visita as Visita;
    }

    
}
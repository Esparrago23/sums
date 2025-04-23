import { ServicioSalud} from "../../domain/entities/serviciosSalud";
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
}
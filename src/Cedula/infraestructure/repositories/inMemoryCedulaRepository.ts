import { Cedula } from '../../domain/entities/cedula';
import { ICedulaRepository } from '../../domain/repositories/ICedulaRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryCedulaRepository implements ICedulaRepository {
    async create(cedula: Cedula): Promise<Cedula> {
        const query = `
            INSERT INTO cedula (unidad_salud_id, entrevistador_id, familia_id, 
                esquema_vacunacion_id, composicion_familiar_id)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [
            cedula.unidad_salud_id,
            cedula.entrevistador_id,
            cedula.familia_id,
            cedula.esquema_vacunacion_id,
            cedula.composicion_familiar_id
        ];
        const result = await db.executePreparedQuery(query, values);
        return result.rows[0];
    }

    async update(cedula: Cedula): Promise<Cedula> {
        const query = `
            UPDATE cedula
            SET unidad_salud_id = $1, 
                entrevistador_id = $2, 
                familia_id = $3, 
                esquema_vacunacion_id = $4, 
                composicion_familiar_id = $5
            WHERE id = $6
            RETURNING *;
        `;
        const values = [
            cedula.unidad_salud_id,
            cedula.entrevistador_id,
            cedula.familia_id,
            cedula.esquema_vacunacion_id,
            cedula.composicion_familiar_id,
            cedula.id
        ];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Cedula not found');
        }
        return result.rows[0];
    }

    async readById(id: number): Promise<Cedula> {
        const query = `
            SELECT * FROM cedula
            WHERE id = $1;
        `;
        const values = [id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Cedula not found');
        }
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        const query = `
            DELETE FROM cedula
            WHERE id = $1;
        `;
        const values = [id];
        await db.executePreparedQuery(query, values);
    }

    async readAll(): Promise<Cedula[]> {
        const query = `
            SELECT * FROM cedula;
        `;
        const result = await db.executePreparedQuery(query, []);
        return result.rows;
    }
}
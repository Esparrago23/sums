import { Dosis } from '../../domain/entities/Dosis';
import { IDosisRepository } from '../../domain/repositories/IDosisRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryDosisRepository implements IDosisRepository {
    async create(dosis: Dosis): Promise<Dosis> {
        const query = `
            INSERT INTO dosis (vacuna_id, nombre)
            VALUES ($1, $2)
            RETURNING *;
        `;
        const values = [dosis.vacuna_id, dosis.nombre];
        const result = await db.executePreparedQuery(query, values);
        return result.rows[0];
    }

    async update(dosis: Dosis): Promise<Dosis> {
        const query = `
            UPDATE dosis
            SET vacuna_id = $1, nombre = $2
            WHERE id = $3
            RETURNING *;
        `;
        const values = [dosis.vacuna_id, dosis.nombre, dosis.id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Dosis not found');
        }
        return result.rows[0];
    }

    async readById(id: number): Promise<Dosis> {
        const query = `
            SELECT * FROM dosis
            WHERE id = $1;
        `;
        const values = [id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Dosis not found');
        }
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        const query = `
            DELETE FROM dosis
            WHERE id = $1;
        `;
        const values = [id];
        await db.executePreparedQuery(query, values);
    }

    async readAll(): Promise<Dosis[]> {
        const query = `
            SELECT * FROM dosis;
        `;
        const result = await db.executePreparedQuery(query, []);
        return result.rows;
    }
}
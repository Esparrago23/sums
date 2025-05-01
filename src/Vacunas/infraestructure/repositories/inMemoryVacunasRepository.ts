import { Vacunas } from '../../domain/entities/Vacunas';
import { IVacunasRepository } from '../../domain/repositories/IVacunasRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryVacunasRepository implements IVacunasRepository {
    async create(vacunas: Vacunas): Promise<Vacunas> {
        const query = `
            INSERT INTO vacunas (nombre)
            VALUES ($1)
            RETURNING *;
        `;
        const values = [vacunas.nombre];
        const result = await db.executePreparedQuery(query, values);
        return result.rows[0];
    }

    async update(vacunas: Vacunas): Promise<Vacunas> {
        const query = `
            UPDATE vacunas
            SET nombre = $1
            WHERE id = $2
            RETURNING *;
        `;
        const values = [vacunas.nombre, vacunas.id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Vacuna not found');
        }
        return result.rows[0];
    }

    async readById(id: number): Promise<Vacunas> {
        const query = `
            SELECT * FROM vacunas
            WHERE id = $1;
        `;
        const values = [id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Vacuna not found');
        }
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        const query = `
            DELETE FROM vacunas
            WHERE id = $1;
        `;
        const values = [id];
        await db.executePreparedQuery(query, values);
    }

    async readAll(): Promise<Vacunas[]> {
        const query = `
            SELECT * FROM vacunas;
        `;
        const result = await db.executePreparedQuery(query, []);
        return result.rows;
    }
}
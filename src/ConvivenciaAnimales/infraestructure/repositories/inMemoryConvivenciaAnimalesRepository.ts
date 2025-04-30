import { ConvivenciaAnimales } from '../../domain/entities/convivenciaAnimales';
import { IConvivenciaAnimalesRepository } from '../../domain/repositories/IConvivenciaAnimalesRepository';
import { db } from '../../../core/db_postgresql';

export class InMemoryConvivenciaAnimalesRepository implements IConvivenciaAnimalesRepository {
    async create(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales> {
        const query = `
            INSERT INTO convivencia_animales (
                familia_id, perros_gatos, vacunacion_mascotas, esterilizacion_mascotas,
                aves_corral, bovinos, porcinos, pollos, comentarios_perros_gatos,
                comentarios_vacunacion, comentarios_esterilizacion, otros_animales
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
            RETURNING *;
        `;
        const values = [
            convivenciaAnimales.familia_id,
            convivenciaAnimales.perros_gatos,
            convivenciaAnimales.vacunacion_mascotas,
            convivenciaAnimales.esterilizacion_mascotas,
            convivenciaAnimales.aves_corral,
            convivenciaAnimales.bovinos,
            convivenciaAnimales.porcinos,
            convivenciaAnimales.comentarios_perros_gatos,
            convivenciaAnimales.comentarios_vacunacion,
            convivenciaAnimales.comentarios_esterilizacion,
            convivenciaAnimales.otros_animales
        ];
        const result = await db.executePreparedQuery(query, values);
        return result.rows[0];
    }

    async update(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales> {
        const query = `
            UPDATE convivencia_animales
            SET familia_id = $1, perros_gatos = $2, vacunacion_mascotas = $3, 
                esterilizacion_mascotas = $4, aves_corral = $5, bovinos = $6, 
                porcinos = $7, pollos = $8, comentarios_perros_gatos = $9,
                comentarios_vacunacion = $10, comentarios_esterilizacion = $11,
                otros_animales = $12
            WHERE id = $13
            RETURNING *;
        `;
        const values = [
            convivenciaAnimales.familia_id,
            convivenciaAnimales.perros_gatos,
            convivenciaAnimales.vacunacion_mascotas,
            convivenciaAnimales.esterilizacion_mascotas,
            convivenciaAnimales.aves_corral,
            convivenciaAnimales.bovinos,
            convivenciaAnimales.porcinos,
            convivenciaAnimales.comentarios_perros_gatos,
            convivenciaAnimales.comentarios_vacunacion,
            convivenciaAnimales.comentarios_esterilizacion,
            convivenciaAnimales.otros_animales,
            convivenciaAnimales.id
        ];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Convivencia animales not found');
        }
        return result.rows[0];
    }

    async readById(id: number): Promise<ConvivenciaAnimales> {
        const query = `
            SELECT * FROM convivencia_animales
            WHERE id = $1;
        `;
        const values = [id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('Convivencia animales not found');
        }
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        const query = `
            DELETE FROM convivencia_animales
            WHERE id = $1;
        `;
        const values = [id];
        await db.executePreparedQuery(query, values);
    }

    async readAll(): Promise<ConvivenciaAnimales[]> {
        const query = `
            SELECT * FROM convivencia_animales;
        `;
        const result = await db.executePreparedQuery(query, []);
        return result.rows;
    }
}
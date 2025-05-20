import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepositoy';
import { db } from '../../../core/db_postgresql';
import { formatDateForDB, parseDBDate } from '../../../core/date_utils';
import { comparePassword } from '../services/bcrypt';

export class InMemoryUserRepository implements IUserRepository {
    async create(user: User): Promise<User> {
        const query = `
            INSERT INTO usuario (nombre_usuario, contrasena, rol_id, activo, unidad_salud_id, datos_laborales_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *;
        `;
        const values = [
            user.nombre_usuario,
            user.contrasena,
            user.rol_id,
            user.activo,
            user.unidad_salud_id || null,
            user.datos_laborales_id || null
        ];
        const result = await db.executePreparedQuery(query, values);

        // Parsear la fecha en el resultado si existe
        const savedUser = result.rows[0];
        if (savedUser.fecha_registro) {
            savedUser.fecha_registro = parseDBDate(savedUser.fecha_registro);
        }
        return savedUser;
    }

    async update(user: User): Promise<User> {
        const query = `
            UPDATE usuario
            SET nombre_usuario = $1, contrasena = $2, rol_id = $3, activo = $4, 
                unidad_salud_id = $5, datos_laborales_id = $6
            WHERE id = $7
            RETURNING *;
        `;
        const values = [
            user.nombre_usuario,
            user.contrasena,
            user.rol_id,
            user.activo,
            user.unidad_salud_id || null,
            user.datos_laborales_id || null,
            user.id
        ];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('User not found');
        }

        // Parsear la fecha en el resultado si existe
        const updatedUser = result.rows[0];
        if (updatedUser.fecha_registro) {
            updatedUser.fecha_registro = parseDBDate(updatedUser.fecha_registro);
        }
        return updatedUser;
    }

    async readById(id: number): Promise<User> {
        const query = `
            SELECT * FROM usuario
            WHERE id = $1;
        `;
        const values = [id];
        const result = await db.executePreparedQuery(query, values);
        if (result.rowCount === 0) {
            throw new Error('User not found');
        }

        // Parsear la fecha en el resultado si existe
        const user = result.rows[0];
        if (user.fecha_registro) {
            user.fecha_registro = parseDBDate(user.fecha_registro);
        }
        return user;
    }

    async delete(id: number): Promise<void> {
        const query = `
            DELETE FROM usuario
            WHERE id = $1;
        `;
        const values = [id];
        await db.executePreparedQuery(query, values);
    }

    async readAll(): Promise<User[]> {
        const query = `
            SELECT * FROM usuario;
        `;
        const result = await db.executePreparedQuery(query, []);

        // Parsear las fechas en los resultados
        return result.rows.map((row: any) => {
            if (row.fecha_registro) {
                row.fecha_registro = parseDBDate(row.fecha_registro);
            }
            return row;
        });
    }

    async findByCredentials(nombre_usuario: string, contrasena: string): Promise<User | null> {
        const query = `
            SELECT * FROM usuario
            WHERE nombre_usuario = $1;
        `;
        const values = [nombre_usuario];
        const result = await db.executePreparedQuery(query, values);

        if (result.rowCount === 0) {
            return null;
        }

        const user = result.rows[0];
        const isPasswordValid = await comparePassword(contrasena, user.contrasena);

        if (!isPasswordValid) {
            return null;
        }
        
        if (user.fecha_registro) {
            user.fecha_registro = parseDBDate(user.fecha_registro);
        }
        return user;
    }
}
import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepositoy';
import { db } from '../../../core/db_postgresql';
import { parseDBDate } from '../../../core/date_utils';

import { comparePassword } from '../services/bcrypt';
export class InMemoryUserRepository implements IUserRepository {
    async create(user: User): Promise<User> {
        const query = `
            INSERT INTO users (id_usuario, nombre_usuario, contraseña, rol, activo)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [
            user.idUsuario,
            user.nombreUsuario,
            user.contraseña,
            user.rol,
            user.activo
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
            UPDATE users
            SET nombre_usuario = $1, contraseña = $2, rol = $3, activo = $4
            WHERE id_usuario = $5
            RETURNING *;
        `;
        const values = [
            user.nombreUsuario,
            user.contraseña,
            user.rol,
            user.activo,
            user.idUsuario
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

    async readById(id: string): Promise<User> {
        const query = `
            SELECT * FROM users
            WHERE id_usuario = $1;
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

    async delete(id: string): Promise<void> {
        const query = `
            DELETE FROM users
            WHERE id_usuario = $1;
        `;
        const values = [id];
        await db.executePreparedQuery(query, values);
    }

    async readAll(): Promise<User[]> {
        const query = `
            SELECT * FROM users;
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

    async findByCredentials(nombreUsuario: string, contraseña: string): Promise<User | null> {
        try {
            const query = `
                SELECT * FROM users
                WHERE nombre_usuario = $1;
            `;
            const values = [nombreUsuario];
            const result = await db.executePreparedQuery(query, values);
            
            if (result.rowCount === 0) {
                console.log('Usuario no encontrado');
                return null;
            }
        
            const user = result.rows[0];
            const isPasswordValid = await comparePassword(contraseña, user.contraseña);
            console.log('Contraseña válida:', isPasswordValid);
            
            if (!isPasswordValid) {
                return null;
            }
        
            return user;
        } catch (error) {
            console.error('Error en findByCredentials:', error);
            return null;
        }
    }
}
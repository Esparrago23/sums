// src/User/domain/entities/User.ts
export class User {
    constructor(
        public id: number,
        public nombre_usuario: string,
        public contrasena: string,
        public rol_id: number,
        public fecha_registro?: Date,
        public activo: boolean = true,
        public unidad_salud_id?: number,
        public datos_laborales_id?: number
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - nombreUsuario
 *         - contraseña
 *       properties:
 *         idUsuario:
 *           type: string
 *           description: ID del usuario
 *         nombreUsuario:
 *           type: string
 *           description: Nombre de usuario
 *         contraseña:
 *           type: string
 *           description: Contraseña del usuario
 *         rol:
 *           type: string
 *           description: Rol del usuario
 *         fechaRegistro:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro del usuario
 *         activo:
 *           type: boolean
 *           description: Estado del usuario
 *     UserInput:
 *       type: object
 *       required:
 *         - nombreUsuario
 *         - contraseña
 *       properties:
 *         nombreUsuario:
 *           type: string
 *           description: Nombre de usuario
 *         contraseña:
 *           type: string
 *           description: Contraseña del usuario
 */
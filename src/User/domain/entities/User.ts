export class User {
    constructor(
        public idUsuario: string,
        public nombreUsuario: string,
        public contraseña: string,
        public rol: string,
        public fechaRegistro?: Date,
        public activo: boolean = true
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
export class Rol {
    constructor(
        public id: number,
        public nombre_rol: string
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Rol:
 *       type: object
 *       required:
 *         - id
 *         - nombre_rol
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del rol
 *         nombre_rol:
 *           type: string
 *           description: Nombre del rol o tipo de entrevistador
 */


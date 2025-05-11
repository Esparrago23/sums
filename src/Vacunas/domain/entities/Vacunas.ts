export class Vacunas {
    constructor(
        public id: number,
        public nombre: string
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Vacunas:
 *       type: object
 *       required:
 *         - id
 *         - nombre
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de la vacuna
 *         nombre:
 *           type: string
 *           description: Nombre de la vacuna
 */

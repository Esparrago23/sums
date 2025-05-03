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
 *         - nombre
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la vacuna
 *         nombre:
 *           type: string
 *           description: Nombre de la vacuna
 */

export class Dosis {
    constructor(
        public id: number,
        public vacuna_id: number,
        public nombre: string
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Dosis:
 *       type: object
 *       required:
 *         - id
 *         - vacuna_id
 *         - nombre
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la dosis
 *         vacuna_id:
 *           type: integer
 *           description: ID de la vacuna asociada
 *         nombre:
 *           type: string
 *           description: Nombre de la dosis
 */
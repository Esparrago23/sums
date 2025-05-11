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
 *           description: Identificador único de la dosis
 *         vacuna_id:
 *           type: integer
 *           description: Referencia a la vacuna aplicada
 *         nombre:
 *           type: string
 *           enum: [Unica, 1era, 2da, Refuerzo]
 *           description: Nombre o tipo de dosis aplicada (Unica, 1era, 2da, Refuerzo)
 */
export class Familia {
    constructor(
        public id: number,
        public unidad_id: number,
        public entrevistador_id: number,
        public fecha_encuesta: Date
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Familia:
 *       type: object
 *       required:
 *         - unidad_id
 *         - entrevistador_id
 *         - fecha_encuesta
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la familia
 *         unidad_id:
 *           type: integer
 *           description: ID de la unidad asociada
 *         entrevistador_id:
 *           type: integer
 *           description: ID del entrevistador asignado
 *         fecha_encuesta:
 *           type: string
 *           format: date-time
 *           description: Fecha de la encuesta
 */

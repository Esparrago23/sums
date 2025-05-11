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
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de la familia
 *         unidad_id:
 *           type: integer
 *           description: Referencia a la unidad de salud asociada
 *         entrevistador_id:
 *           type: integer
 *           description: Referencia al entrevistador que registró a la familia
 *         fecha_encuesta:
 *           type: string
 *           format: date
 *           description: Fecha en que se realizó la encuesta
 */

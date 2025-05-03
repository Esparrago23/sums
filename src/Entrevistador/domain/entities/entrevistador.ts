export class Entrevistador {
    constructor(
        public id: number,
        public nombre: string,
        public fecha_registro: Date,
        public unidad_salud_id: number,
        public datos_laborales_id: number
    ) {}
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Entrevistador:
 *       type: object
 *       required:
 *         - nombre
 *         - unidad_salud_id
 *         - datos_laborales_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del entrevistador
 *         nombre:
 *           type: string
 *           description: Nombre del entrevistador
 *         fecha_registro:
 *           type: string
 *           format: date-time
 *           description: Fecha de registro
 *         unidad_salud_id:
 *           type: integer
 *           description: ID de la unidad de salud asociada
 *         datos_laborales_id:
 *           type: integer
 *           description: ID de los datos laborales
 */

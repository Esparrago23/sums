/**
 * @swagger
 * components:
 *   schemas:
 *     Cedula:
 *       type: object
 *       description: Entidad que representa una cédula en el sistema
 *       required:
 *         - id
 *         - unidad_salud_id
 *         - entrevistador_id
 *         - familia_id
 *         - esquema_vacunacion_id
 *         - composicion_familiar_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de la cédula
 *         unidad_salud_id:
 *           type: integer
 *           description: Identificador de la unidad de salud asociada
 *         entrevistador_id:
 *           type: integer
 *           description: Identificador del entrevistador asignado
 *         familia_id:
 *           type: integer
 *           description: Identificador de la familia relacionada
 *         esquema_vacunacion_id:
 *           type: integer
 *           description: Identificador del esquema de vacunación
 *         composicion_familiar_id:
 *           type: integer
 *           description: Identificador de la composición familiar
 */
export class Cedula {
    constructor(
        public id: number,
        public unidad_salud_id: number,
        public entrevistador_id: number,
        public familia_id: number,
        public esquema_vacunacion_id: number,
        public composicion_familiar_id: number
    ) {}
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Cedula:
 *       type: object
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
 *           description: Referencia a la unidad de salud asociada
 *         entrevistador_id:
 *           type: integer
 *           description: Referencia al entrevistador que realizó la cedula
 *         familia_id:
 *           type: integer
 *           description: Referencia a la familia evaluada
 *         esquema_vacunacion_id:
 *           type: integer
 *           description: Referencia al esquema de vacunación aplicado
 *         composicion_familiar_id:
 *           type: integer
 *           description: Referencia a la composición familiar registrada
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

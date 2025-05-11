export class MiembroFamilia {
    constructor(
        public id: number,
        public datos_personales_id: number,
        public salud_id: number,
        public educacion_id: number
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     MiembroFamilia:
 *       type: object
 *       required:
 *         - id
 *         - datos_personales_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del miembro familiar
 *         datos_personales_id:
 *           type: integer
 *           description: Referencia a los datos personales del miembro
 *         salud_id:
 *           type: integer
 *           description: Referencia a los datos de salud del miembro
 *         educacion_id:
 *           type: integer
 *           description: Referencia a los datos educativos del miembro
 */

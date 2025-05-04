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
 *         - datos_personales_id
 *         - salud_id
 *         - educacion_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del miembro de la familia
 *         datos_personales_id:
 *           type: integer
 *           description: ID de los datos personales del miembro
 *         salud_id:
 *           type: integer
 *           description: ID de la información de salud del miembro
 *         educacion_id:
 *           type: integer
 *           description: ID de la información educativa del miembro
 */

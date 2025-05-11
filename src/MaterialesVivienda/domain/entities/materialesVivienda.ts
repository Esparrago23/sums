export class MaterialesVivienda {
    constructor(
        public id: number,
        public vivienda_id: number,
        public tipo: string,
        public material: string,
        public especificacion: string
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     MaterialesVivienda:
 *       type: object
 *       required:
 *         - id
 *         - vivienda_id
 *         - tipo
 *         - material
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del registro de materiales
 *         vivienda_id:
 *           type: integer
 *           description: Referencia a la vivienda asociada
 *         tipo:
 *           type: string
 *           description: Tipo de elemento constructivo (piso, pared, techo, etc.)
 *         material:
 *           type: string
 *           description: Material del que está hecho el elemento
 *         especificacion:
 *           type: string
 *           description: Detalles adicionales sobre el material
 */
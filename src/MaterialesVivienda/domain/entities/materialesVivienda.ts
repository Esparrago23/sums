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
 *         - vivienda_id
 *         - tipo
 *         - material
 *         - especificacion
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del registro de materiales
 *         vivienda_id:
 *           type: integer
 *           description: ID de la vivienda relacionada
 *         tipo:
 *           type: string
 *           description: Tipo de elemento (ej. techo, pared)
 *         material:
 *           type: string
 *           description: Tipo de material usado
 *         especificacion:
 *           type: string
 *           description: Especificación adicional del material
 */

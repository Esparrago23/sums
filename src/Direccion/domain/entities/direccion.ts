/**
 * @swagger
 * components:
 *   schemas:
 *     Direccion:
 *       type: object
 *       required:
 *         - id
 *         - calle
 *         - numero_exterior
 *         - colonia
 *         - municipio
 *         - entidad
 *         - codigo_postal
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la dirección
 *         calle:
 *           type: string
 *           description: Nombre de la calle
 *         numero_exterior:
 *           type: string
 *           description: Número exterior del domicilio
 *         colonia:
 *           type: string
 *           description: Nombre de la colonia
 *         municipio:
 *           type: string
 *           description: Nombre del municipio
 *         entidad:
 *           type: string
 *           description: Nombre de la entidad federativa
 *         codigo_postal:
 *           type: string
 *           description: Código postal
 */
export class Direccion {
    constructor(
        public id: number,
        public calle: string,
        public numero_exterior: string,
        public colonia: string,
        public municipio: string,
        public entidad: string,
        public codigo_postal: string
    ) {}
}
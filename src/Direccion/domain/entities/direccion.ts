/**
 * @swagger
 * components:
 *   schemas:
 *     Direccion:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de la dirección
 *         calle:
 *           type: string
 *           description: Nombre de la calle
 *         numero_exterior:
 *           type: string
 *           description: Número exterior de la vivienda
 *         colonia:
 *           type: string
 *           description: Nombre de la colonia o fraccionamiento
 *         municipio:
 *           type: string
 *           description: Municipio o delegación
 *         entidad:
 *           type: string
 *           description: Entidad federativa (estado)
 *         codigo_postal:
 *           type: string
 *           description: Código postal de la zona
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
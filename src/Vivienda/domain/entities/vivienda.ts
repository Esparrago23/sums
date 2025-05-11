export class Vivienda {
    constructor(
        public id: number,
        public familia_id: number,
        public direccion_id: number,
        public servicios_basicos_id: number,
        public cocina_con_leña: boolean,
        public numero_cuartos: number,
        public numero_habitantes: number
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Vivienda:
 *       type: object
 *       required:
 *         - id
 *         - familia_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de la vivienda
 *         familia_id:
 *           type: integer
 *           description: Referencia a la familia que habita la vivienda
 *         direccion_id:
 *           type: integer
 *           description: Referencia a la dirección de la vivienda
 *         servicios_basicos_id:
 *           type: integer
 *           description: Referencia a los servicios básicos de la vivienda
 *         cocina_con_leña:
 *           type: boolean
 *           description: Indica si se cocina con leña en la vivienda
 *         numero_cuartos:
 *           type: integer
 *           description: Número de cuartos que tiene la vivienda
 *         numero_habitantes:
 *           type: integer
 *           description: Número de personas que habitan la vivienda
 */
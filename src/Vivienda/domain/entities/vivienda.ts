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
 *         - familia_id
 *         - direccion_id
 *         - servicios_basicos_id
 *         - cocina_con_leña
 *         - numero_cuartos
 *         - numero_habitantes
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la vivienda
 *         familia_id:
 *           type: integer
 *           description: ID de la familia
 *         direccion_id:
 *           type: integer
 *           description: ID de la dirección
 *         servicios_basicos_id:
 *           type: integer
 *           description: ID de los servicios básicos asociados
 *         cocina_con_leña:
 *           type: boolean
 *           description: Si se cocina con leña
 *         numero_cuartos:
 *           type: integer
 *           description: Número de cuartos
 *         numero_habitantes:
 *           type: integer
 *           description: Número de habitantes
 */

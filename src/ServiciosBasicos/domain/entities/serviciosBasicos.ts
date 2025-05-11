export class ServiciosBasicos {
    constructor(
        public id: number,
        public cocina_separada: boolean,
        public energia_electrica: boolean,
        public agua_entubada: boolean,
        public drenaje: boolean,
        public wc: boolean,
        public letrina: boolean,
        public al_ras_de_suelo: boolean,
        public fosa_septica: boolean
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     ServiciosBasicos:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del registro de servicios básicos
 *         cocina_separada:
 *           type: boolean
 *           description: Indica si la cocina está separada del resto de la vivienda
 *         energia_electrica:
 *           type: boolean
 *           description: Indica si la vivienda cuenta con energía eléctrica
 *         agua_entubada:
 *           type: boolean
 *           description: Indica si la vivienda cuenta con agua entubada
 *         drenaje:
 *           type: boolean
 *           description: Indica si la vivienda cuenta con sistema de drenaje
 *         wc:
 *           type: boolean
 *           description: Indica si la vivienda cuenta con sanitario (WC)
 *         letrina:
 *           type: boolean
 *           description: Indica si la vivienda utiliza letrina
 *         al_ras_de_suelo:
 *           type: boolean
 *           description: Indica si la deposición de desechos es al ras del suelo
 *         fosa_septica:
 *           type: boolean
 *           description: Indica si la vivienda cuenta con fosa séptica
 */

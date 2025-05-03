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
 *         - cocina_separada
 *         - energia_electrica
 *         - agua_entubada
 *         - drenaje
 *         - wc
 *         - letrina
 *         - al_ras_de_suelo
 *         - fosa_septica
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del registro de servicios básicos
 *         cocina_separada:
 *           type: boolean
 *           description: Si la vivienda tiene cocina separada
 *         energia_electrica:
 *           type: boolean
 *           description: Si la vivienda tiene energía eléctrica
 *         agua_entubada:
 *           type: boolean
 *           description: Si la vivienda tiene agua entubada
 *         drenaje:
 *           type: boolean
 *           description: Si la vivienda tiene drenaje
 *         wc:
 *           type: boolean
 *           description: Si la vivienda tiene WC
 *         letrina:
 *           type: boolean
 *           description: Si la vivienda tiene letrina
 *         al_ras_de_suelo:
 *           type: boolean
 *           description: Si la vivienda está al ras de suelo
 *         fosa_septica:
 *           type: boolean
 *           description: Si la vivienda tiene fosa séptica
 */

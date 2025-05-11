/**
 * @swagger
 * components:
 *   schemas:
 *     Alimentacion:
 *       type: object
 *       required:
 *         - carne_pescado_pollo
 *         - frutas_verduras
 *         - cereales_granos_leguminosas
 *       properties:
 *         carne_pescado_pollo:
 *           type: number
 *           description: Veces por semana (0-7)
 *           minimum: 0
 *           maximum: 7
 *         frutas_verduras:
 *           type: number
 *           description: Veces por semana (0-7)
 *           minimum: 0
 *           maximum: 7
 *         cereales_granos_leguminosas:
 *           type: number
 *           description: Veces por semana (0-7)
 *           minimum: 0
 *           maximum: 7
 */
export class Alimentacion {
    constructor(
        public carne_pescado_pollo: number,
        public frutas_verduras: number,
        public cereales_granos_leguminosas: number
    ) {}
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Toxicomanias:
 *       type: object
 *       required:
 *         - alcoholismo
 *         - tabaquismo
 *       properties:
 *         alcoholismo:
 *           type: boolean
 *           description: Indica si existe consumo problemático de alcohol
 *         tabaquismo:
 *           type: boolean
 *           description: Indica si existe consumo de tabaco
 *         otras_sustancias:
 *           type: string
 *           description: Descripción de otras sustancias consumidas
 */

export class Toxicomanias {
    constructor(
        public alcoholismo: boolean,
        public tabaquismo: boolean,
        public otras_sustancias: string
    ) {}
}

/**
 * @swagger
 * components:
 *   schemas:
 *     EnfermedadesCronicas:
 *       type: object
 *       required:
 *         - obesidad
 *         - hipertension
 *         - diabetes_mellitus_tipo_2
 *         - tosedor_cronico
 *       properties:
 *         obesidad:
 *           type: boolean
 *           description: Indica si la persona padece obesidad
 *         hipertension:
 *           type: boolean
 *           description: Indica si la persona padece hipertensión arterial
 *         diabetes_mellitus_tipo_2:
 *           type: boolean
 *           description: Indica si la persona padece diabetes mellitus tipo 2
 *         tosedor_cronico:
 *           type: boolean
 *           description: Indica si la persona es tosedor crónico
 *         otras_enfermedades:
 *           type: string
 *           description: Descripción de otras enfermedades crónicas padecidas
 */
export class EnfermedadesCronicas {
    constructor(
        public obesidad: boolean,
        public hipertension: boolean,
        public diabetes_mellitus_tipo_2: boolean,
        public tosedor_cronico: boolean,
        public otras_enfermedades: string
    ) {}
}

/**
 * @swagger
 * components:
 *   schemas:
 *     EstiloVida:
 *       type: object
 *       required:
 *         - id
 *         - persona_id
 *         - toxicomanias
 *         - enfermedades_cronicas
 *         - actividad_fisica
 *         - alimentacion
 *         - higiene_personal
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del registro de estilo de vida
 *         persona_id:
 *           type: integer
 *           description: Referencia a la persona asociada
 *         toxicomanias:
 *           $ref: '#/components/schemas/Toxicomanias'
 *           description: Información sobre consumo de sustancias
 *         enfermedades_cronicas:
 *           $ref: '#/components/schemas/EnfermedadesCronicas'
 *           description: Información sobre enfermedades crónicas
 *         actividad_fisica:
 *           type: boolean
 *           description: Indica si la persona realiza actividad física regularmente
 *         alimentacion:
 *           $ref: '#/components/schemas/Alimentacion'
 *           description: Información sobre hábitos alimenticios
 *         higiene_personal:
 *           type: boolean
 *           description: Indica si la persona mantiene adecuada higiene personal
 */
export class EstiloVida {
    constructor(
        public id: number,
        public persona_id: number,
        public toxicomanias: Toxicomanias,
        public enfermedades_cronicas: EnfermedadesCronicas,
        public actividad_fisica: boolean,
        public alimentacion: Alimentacion,
        public higiene_personal: boolean
    ) {}
}
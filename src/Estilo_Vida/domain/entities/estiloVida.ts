/**
 * @swagger
 * components:
 *   schemas:
 *     Alimentacion:
 *       type: object
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
 *       properties:
 *         alcoholismo:
 *           type: boolean
 *           description: Indica si la persona tiene problemas con el alcohol
 *         tabaquismo:
 *           type: boolean
 *           description: Indica si la persona tiene problemas con el tabaco
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
 *       properties:
 *         obesidad:
 *           type: boolean
 *           description: Indica si la persona tiene obesidad
 *         hipertension:
 *           type: boolean
 *           description: Indica si la persona tiene hipertensión
 *         diabetes_mellitus_tipo_2:
 *           type: boolean
 *           description: Indica si la persona tiene diabetes tipo 2
 *         tosedor_cronico:
 *           type: boolean
 *           description: Indica si la persona es tosedor crónico
 *         otras_enfermedades:
 *           type: string
 *           description: Descripción de otras enfermedades crónicas
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
 *       properties:
 *         id:
 *           type: number
 *           description: Identificador único del estilo de vida
 *         persona_id:
 *           type: number
 *           description: Identificador de la persona asociada
 *         toxicomanias:
 *          
 *           description: Información sobre toxicomanías
 *         enfermedades_cronicas:
 *           
 *           description: Información sobre enfermedades crónicas
 *         actividad_fisica:
 *           type: boolean
 *           description: Indica si la persona realiza actividad física
 *         alimentacion:
 *           
 *           description: Información sobre hábitos alimenticios
 *         higiene_personal:
 *           type: boolean
 *           description: Indica si la persona mantiene buena higiene personal
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
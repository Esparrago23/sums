export class SaludFamiliar {
    constructor(
        public id: number,
        public persona_id: number,
        public seguridad_social: boolean,
        public enfermedades: boolean,
        public embarazo_atencion: boolean,
        public alimentacion: string,
        public higiene_familiar: boolean,
        public alcoholismo: boolean,
        public tabaquismo: boolean,
        public tamizaje_cervico_uterino: boolean,
        public tamizaje_cancer_mama: boolean,
        public discapacidad: boolean,
        public servicio_salud_frecuencia: boolean,
        public motivo_uso_servicio_salud: boolean
    ){}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     SaludFamiliar:
 *       type: object
 *       required:
 *         - id
 *         - persona_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del registro de salud familiar
 *         persona_id:
 *           type: integer
 *           description: Referencia a la persona asociada
 *         seguridad_social:
 *           type: boolean
 *           description: Indica si la persona cuenta con seguridad social
 *         enfermedades:
 *           type: boolean
 *           description: Indica si la persona padece alguna enfermedad
 *         embarazo_atencion:
 *           type: boolean
 *           description: Indica si hay seguimiento médico en caso de embarazo
 *         alimentacion:
 *           type: string
 *           description: Descripción de hábitos alimenticios
 *         higiene_familiar:
 *           type: boolean
 *           description: Indica si se practican buenos hábitos de higiene familiar
 *         alcoholismo:
 *           type: boolean
 *           description: Indica si hay consumo problemático de alcohol
 *         tabaquismo:
 *           type: boolean
 *           description: Indica si hay consumo de tabaco
 *         tamizaje_cervico_uterino:
 *           type: boolean
 *           description: Indica si se ha realizado tamizaje cérvico uterino
 *         tamizaje_cancer_mama:
 *           type: boolean
 *           description: Indica si se ha realizado tamizaje de cáncer de mama
 *         discapacidad:
 *           type: boolean
 *           description: Indica si la persona tiene alguna discapacidad
 *         servicio_salud_frecuencia:
 *           type: boolean
 *           description: Indica si acude con frecuencia a servicios de salud
 *         motivo_uso_servicio_salud:
 *           type: boolean
 *           description: Indica si el uso de servicios de salud es por motivos preventivos
 */

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
 *         - persona_id
 *         - seguridad_social
 *         - enfermedades
 *         - embarazo_atencion
 *         - alimentacion
 *         - higiene_familiar
 *         - alcoholismo
 *         - tabaquismo
 *         - tamizaje_cervico_uterino
 *         - tamizaje_cancer_mama
 *         - discapacidad
 *         - servicio_salud_frecuencia
 *         - motivo_uso_servicio_salud
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del registro de salud familiar
 *         persona_id:
 *           type: integer
 *           description: ID de la persona asociada
 *         seguridad_social:
 *           type: boolean
 *           description: Si la persona tiene seguridad social
 *         enfermedades:
 *           type: boolean
 *           description: Si la persona padece alguna enfermedad
 *         embarazo_atencion:
 *           type: boolean
 *           description: Si la persona recibe atención por embarazo
 *         alimentacion:
 *           type: string
 *           description: Información sobre la alimentación de la persona
 *         higiene_familiar:
 *           type: boolean
 *           description: Si la persona mantiene una higiene adecuada
 *         alcoholismo:
 *           type: boolean
 *           description: Si la persona tiene problemas con el alcohol
 *         tabaquismo:
 *           type: boolean
 *           description: Si la persona fuma
 *         tamizaje_cervico_uterino:
 *           type: boolean
 *           description: Si la persona se realiza el tamizaje cervico-uterino
 *         tamizaje_cancer_mama:
 *           type: boolean
 *           description: Si la persona se realiza el tamizaje de cáncer de mama
 *         discapacidad:
 *           type: boolean
 *           description: Si la persona tiene alguna discapacidad
 *         servicio_salud_frecuencia:
 *           type: boolean
 *           description: Frecuencia con la que utiliza el servicio de salud
 *         motivo_uso_servicio_salud:
 *           type: boolean
 *           description: Motivo principal del uso del servicio de salud
 */

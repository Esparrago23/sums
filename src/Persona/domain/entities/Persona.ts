export class Persona {
    constructor(
        public id: number,
        public familia_id: number,
        public fecha_nacimiento: Date,
        public edad: number,
        public sexo: string,
        public estado_civil: string,
        public escolaridad: string,
        public lengua: string,
        public alfabetizacion: boolean,
        public parentesco: string,
        public ocupacion: string,
        public ingreso: number,
        public seguridad_social: boolean,
        public discapacidad: boolean,
        public tipo_discapacidad: string,
        public primer_nombre: string,
        public segundo_nombre: string,
        public apellido_paterno: string,
        public apellido_materno: string,
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Persona:
 *       type: object
 *       required:
 *         - familia_id
 *         - fecha_nacimiento
 *         - edad
 *         - sexo
 *         - estado_civil
 *         - escolaridad
 *         - lengua
 *         - alfabetizacion
 *         - parentesco
 *         - ocupacion
 *         - ingreso
 *         - seguridad_social
 *         - discapacidad
 *         - tipo_discapacidad
 *         - primer_nombre
 *         - apellido_paterno
 *         - apellido_materno
 *       properties:
 *         id:
 *           type: integer
 *           description: ID de la persona
 *         familia_id:
 *           type: integer
 *           description: ID de la familia a la que pertenece
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento de la persona
 *         edad:
 *           type: integer
 *           description: Edad de la persona
 *         sexo:
 *           type: string
 *           description: Sexo de la persona
 *         estado_civil:
 *           type: string
 *           description: Estado civil de la persona
 *         escolaridad:
 *           type: string
 *           description: Nivel educativo de la persona
 *         lengua:
 *           type: string
 *           description: Lengua hablada por la persona
 *         alfabetizacion:
 *           type: boolean
 *           description: Si la persona está alfabetizada
 *         parentesco:
 *           type: string
 *           description: Parentesco con el jefe de la familia
 *         ocupacion:
 *           type: string
 *           description: Ocupación de la persona
 *         ingreso:
 *           type: number
 *           description: Ingreso mensual de la persona
 *         seguridad_social:
 *           type: boolean
 *           description: Si la persona cuenta con seguridad social
 *         discapacidad:
 *           type: boolean
 *           description: Si la persona tiene alguna discapacidad
 *         tipo_discapacidad:
 *           type: string
 *           description: Tipo de discapacidad, si aplica
 *         primer_nombre:
 *           type: string
 *           description: Primer nombre de la persona
 *         segundo_nombre:
 *           type: string
 *           description: Segundo nombre de la persona
 *         apellido_paterno:
 *           type: string
 *           description: Apellido paterno de la persona
 *         apellido_materno:
 *           type: string
 *           description: Apellido materno de la persona
 */

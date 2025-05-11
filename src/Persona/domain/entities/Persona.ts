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
 *         - id
 *         - familia_id
 *         - fecha_nacimiento
 *         - sexo
 *         - primer_nombre
 *         - apellido_paterno
 *         - apellido_materno
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de la persona
 *         familia_id:
 *           type: integer
 *           description: Referencia a la familia a la que pertenece
 *         fecha_nacimiento:
 *           type: string
 *           format: date
 *           description: Fecha de nacimiento
 *         edad:
 *           type: integer
 *           description: Edad de la persona
 *         sexo:
 *           type: string
 *           description: Sexo biológico de la persona
 *         estado_civil:
 *           type: string
 *           description: Estado civil actual
 *         escolaridad:
 *           type: string
 *           description: Nivel de escolaridad alcanzado
 *         lengua:
 *           type: string
 *           description: Lengua o idioma principal que habla
 *         alfabetizacion:
 *           type: boolean
 *           description: Indica si la persona sabe leer y escribir
 *         parentesco:
 *           type: string
 *           description: Parentesco con el jefe de familia
 *         ocupacion:
 *           type: string
 *           description: Ocupación o profesión actual
 *         ingreso:
 *           type: number
 *           format: float
 *           description: Ingreso económico mensual aproximado
 *         seguridad_social:
 *           type: boolean
 *           description: Indica si cuenta con seguridad social
 *         discapacidad:
 *           type: boolean
 *           description: Indica si la persona tiene alguna discapacidad
 *         tipo_discapacidad:
 *           type: string
 *           description: Descripción del tipo de discapacidad si aplica
 *         primer_nombre:
 *           type: string
 *           description: Primer nombre de la persona
 *         segundo_nombre:
 *           type: string
 *           description: Segundo nombre de la persona (opcional)
 *         apellido_paterno:
 *           type: string
 *           description: Apellido paterno de la persona
 *         apellido_materno:
 *           type: string
 *           description: Apellido materno de la persona
 */

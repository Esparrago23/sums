export class UnidadSalud {
    constructor(
        public id: number,
        public clues: string,
        public nombre: string,
        public distrito: string,
        public municipio: string,
        public especialidad: string,
    ){}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     UnidadSalud:
 *       type: object
 *       required:
 *         - clues
 *         - nombre
 *         - distrito
 *         - municipio
 *         - especialidad
 *       properties:
 *         id:
 *           type: integer
 *           description: ID del registro de unidad de salud
 *         clues:
 *           type: string
 *           description: Clave única de la unidad de salud
 *         nombre:
 *           type: string
 *           description: Nombre de la unidad de salud
 *         distrito:
 *           type: string
 *           description: Distrito en el que se encuentra la unidad de salud
 *         municipio:
 *           type: string
 *           description: Municipio en el que se encuentra la unidad de salud
 *         especialidad:
 *           type: string
 *           description: Especialidad de la unidad de salud
 */

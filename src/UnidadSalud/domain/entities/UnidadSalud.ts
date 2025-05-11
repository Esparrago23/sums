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
 *         - id
 *         - clues
 *         - nombre
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de la unidad de salud
 *         clues:
 *           type: string
 *           maxLength: 15
 *           description: Clave Única de Establecimientos de Salud
 *         nombre:
 *           type: string
 *           description: Nombre completo de la unidad de salud
 *         distrito:
 *           type: string
 *           description: Distrito sanitario al que pertenece
 *         municipio:
 *           type: string
 *           description: Municipio donde se ubica la unidad
 *         especialidad:
 *           type: string
 *           description: Especialidad principal de la unidad de salud
 */
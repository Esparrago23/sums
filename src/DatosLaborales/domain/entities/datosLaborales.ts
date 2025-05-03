/**
 * @swagger
 * components:
 *   schemas:
 *     DatosLaborales:
 *       type: object
 *       required:
 *         - id
 *         - turnos
 *         - horario
 *         - rango_Horario
 *         - cargo
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de los datos laborales
 *         turnos:
 *           type: string
 *           description: Turnos de trabajo
 *         horario:
 *           type: string
 *           description: Horario de trabajo
 *         rango_Horario:
 *           type: string
 *           description: Rango horario de trabajo
 *         cargo:
 *           type: string
 *           description: Cargo o puesto de trabajo
 */
export class DatosLaborales {
    constructor(
        public id: number,
        public turnos: string,
        public horario: string,
        public rango_Horario: string,
        public cargo: string
    ) {}
}
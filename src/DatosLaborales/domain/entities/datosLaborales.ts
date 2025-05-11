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
 *         - rango_horario
 *         - cargo
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único de los datos laborales
 *         turnos:
 *           type: string
 *           description: Turnos de trabajo (matutino, vespertino, nocturno, etc.)
 *         horario:
 *           type: string
 *           description: Horario específico de trabajo
 *         rango_horario:
 *           type: string
 *           description: Rango de horas de la jornada laboral
 *         cargo:
 *           type: string
 *           description: Cargo o puesto de trabajo que desempeña
 */
export class DatosLaborales {
    constructor(
        public id: number,
        public turnos: string,
        public horario: string,
        public rango_horario: string,
        public cargo: string
    ) {}
}
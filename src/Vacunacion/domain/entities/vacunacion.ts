
export class Vacunacion {
  constructor(
    public id: number,
    public persona_id: number,
    public fecha_aplicacion: Date,
    public dosis_id: number,
  ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Vacunacion:
 *       type: object
 *       required:
 *         - id
 *         - persona_id
 *         - fecha_aplicacion
 *         - dosis_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del registro de vacunación
 *         persona_id:
 *           type: integer
 *           description: Referencia a la persona vacunada
 *         fecha_aplicacion:
 *           type: string
 *           format: date
 *           description: Fecha en que se aplicó la vacuna
 *         dosis_id:
 *           type: integer
 *           description: Referencia a la dosis aplicada
 */
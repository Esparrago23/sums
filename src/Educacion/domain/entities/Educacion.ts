/**
 * @swagger
 * components:
 *   schemas:
 *     Educacion:
 *       type: object
 *       required:
 *         - id
 *         - persona_id
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del registro de educación
 *         persona_id:
 *           type: integer
 *           description: Referencia a la persona asociada
 *         escolaridad:
 *           type: string
 *           description: Nivel de escolaridad alcanzado
 *         ocupacion:
 *           type: string
 *           description: Ocupación actual o profesión
 */
export class Educacion {
  constructor(
    public id: number,
    public persona_id: number,
    public escolaridad: string,
    public ocupacion: string
  ) {}
}

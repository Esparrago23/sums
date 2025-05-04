/**
 * @swagger
 * components:
 *   schemas:
 *     Educacion:
 *       type: object
 *       required:
 *         - id
 *         - persona_id
 *         - escolaridad
 *         - ocupacion
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la educación
 *         persona_id:
 *           type: integer
 *           description: ID de la persona asociada
 *         escolaridad:
 *           type: string
 *           description: Nivel de escolaridad de la persona
 *         ocupacion:
 *           type: string
 *           description: Ocupación actual de la persona
 */
export class Educacion {
  constructor(
    public id: number,
    public persona_id: number,
    public escolaridad: string,
    public ocupacion: string
  ) {}
}

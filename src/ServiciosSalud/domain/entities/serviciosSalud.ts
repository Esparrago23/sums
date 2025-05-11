export interface Visita {
    fecha: string; 
    profesional: string;
    tipo: string;
    observaciones?: string;
    actividades?: string[];
}

export class ServicioSalud {
    constructor(
        public id: number,
        public persona_id: number,
        public visitas: Visita[],
        public frecuencia: string
    ) {}
}
/**
 * @swagger
 * components:
 *   schemas:
 *     Visita:
 *       type: object
 *       required:
 *         - fecha
 *         - profesional
 *         - tipo
 *       properties:
 *         fecha:
 *           type: string
 *           format: date
 *           description: Fecha en que se realizó la visita
 *         profesional:
 *           type: string
 *           description: Nombre o tipo de profesional que realizó la visita
 *         tipo:
 *           type: string
 *           description: Tipo de visita realizada (consulta, seguimiento, etc.)
 *         observaciones:
 *           type: string
 *           description: Observaciones adicionales sobre la visita
 *         actividades:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de actividades realizadas durante la visita
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ServicioSalud:
 *       type: object
 *       required:
 *         - id
 *         - persona_id
 *         - visitas
 *       properties:
 *         id:
 *           type: integer
 *           description: Identificador único del servicio de salud
 *         persona_id:
 *           type: integer
 *           description: Referencia a la persona que recibe el servicio
 *         visitas:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Visita'
 *           description: Lista de visitas médicas registradas
 *         frecuencia:
 *           type: string
 *           description: Frecuencia con la que se realizan las visitas médicas
 */
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
 *           description: Fecha de la visita
 *         profesional:
 *           type: string
 *           description: Nombre del profesional que realizó la visita
 *         tipo:
 *           type: string
 *           description: Tipo de visita
 *         observaciones:
 *           type: string
 *           description: Observaciones realizadas en la visita
 *         actividades:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de actividades realizadas

 *     ServicioSalud:
 *       type: object
 *       required:
 *         - persona_id
 *         - visitas
 *         - frecuencia
 *       properties:
 *         id:
 *           type: integer
 *         persona_id:
 *           type: integer
 *           description: ID de la persona relacionada
 *         frecuencia:
 *           type: string
 *           description: Frecuencia con la que se usa el servicio
 *         visitas:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Visita'
 */

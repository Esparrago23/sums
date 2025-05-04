/**
 * @swagger
 * components:
 *   schemas:
 *     ConvivenciaAnimales:
 *       type: object
 *       required:
 *         - id
 *         - familia_id
 *         - perros_gatos
 *         - vacunacion_mascotas
 *         - esterilizacion_mascotas
 *         - aves_corral
 *         - bovinos
 *         - porcinos
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la convivencia con animales
 *         familia_id:
 *           type: integer
 *           description: ID de la familia asociada
 *         perros_gatos:
 *           type: boolean
 *           description: Indica si tienen perros o gatos
 *         vacunacion_mascotas:
 *           type: boolean
 *           description: Indica si las mascotas están vacunadas
 *         esterilizacion_mascotas:
 *           type: boolean
 *           description: Indica si las mascotas están esterilizadas
 *         aves_corral:
 *           type: boolean
 *           description: Indica si tienen aves de corral
 *         bovinos:
 *           type: boolean
 *           description: Indica si tienen bovinos
 *         porcinos:
 *           type: boolean
 *           description: Indica si tienen porcinos
 *         comentarios_perros_gatos:
 *           type: string
 *           description: Comentarios sobre perros y gatos
 *         comentarios_vacunacion:
 *           type: string
 *           description: Comentarios sobre vacunación
 *         comentarios_esterilizacion:
 *           type: string
 *           description: Comentarios sobre esterilización
 *         otros_animales:
 *           type: string
 *           description: Descripción de otros animales
 */
export class ConvivenciaAnimales {
    constructor(
        public id: number,
        public familia_id: number,
        public perros_gatos: boolean,
        public vacunacion_mascotas: boolean,
        public esterilizacion_mascotas: boolean,
        public aves_corral: boolean,
        public bovinos: boolean,
        public porcinos: boolean,
        public comentarios_perros_gatos: string,
        public comentarios_vacunacion: string,
        public comentarios_esterilizacion: string,
        public otros_animales: string
    ) {}
}
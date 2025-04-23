
export class ConvivenciaAnimales {
    constructor(
        public id: number,
        public familia_id: number,
        public perros_gatos: boolean,
        public vacunacion_mascotas: boolean,
        public esterilizacion_mascotas: boolean,
        public aves_ornamental: boolean,
        public aves_corral: boolean,
        public bovinos: boolean,
        public porcinos: boolean,
        public pollos: boolean,
        public comentarios_perros_gatos: string,
        public comentarios_vacunacion: string,
        public comentarios_esterilizacion: string,
        public otros_animales: string
    ) {}
}
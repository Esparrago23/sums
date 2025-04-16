export class ConvivenciaAnimales {
    constructor(
        public id: number,
        public familia_id: number,
        public perros_gatos: boolean,
        public vacunacion_mascotas: boolean,
        public esterilizacion_mascotas: boolean,
        public aves_corral: boolean,
        public bovinos: boolean,
        public porcinos: boolean
    ) {}
}
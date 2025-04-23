export class Vivienda {
    constructor(
        public id: number,
        public familia_id: number,
        public direccion_id: number,
        public servicios_basicos_id: number,
        public cocina_con_leña: boolean,
        public numero_cuartos: number,
        public numero_habitantes: number
    ) {}
}
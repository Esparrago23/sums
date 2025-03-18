export class ServiciosSalud {
    constructor(
        public id: number,
        public persona_id: number,
        public visitas: object,
        public frecuencia: string
    ) {}
}
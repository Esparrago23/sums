export interface Visita {
    fecha: Date;
    motivo: string;
    resultado: string;
}

export class ServicioSalud {
    constructor(
        public id: number,
        public persona_id: number,
        public visitas: any, // usando 'any' para el campo JSONB
        public frecuencia: string
    ) {}
}
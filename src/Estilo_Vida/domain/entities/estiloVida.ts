export class EstiloVida {
    constructor(
        public id: number,
        public persona_id: number,
        public toxicomanias: any, // usando 'any' para el campo JSONB
        public enfermedades_cronicas: any, // usando 'any' para el campo JSONB
        public actividad_fisica: boolean,
        public alimentacion: any,
        public higiene_personal: boolean
    ) {}
}
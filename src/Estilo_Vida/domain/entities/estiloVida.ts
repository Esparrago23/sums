export class EstiloVida {
    constructor(
        public id: number,
        public persona_id: number,
        public toxicomanias: any, // usando 'any' para el campo JSONB
        public actividad_fisica: boolean,
        public alimentacion: string,
        public higiene_personal: boolean
    ) {}
}
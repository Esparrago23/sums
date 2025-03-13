interface Toxicomanias {
    // Falta Estructura de Base de Datos
}

interface EnfermedadesCronicas {
    // Falta Estructura de Base de Datos
}

interface Alimentacion {
    // Falta Estructura de Base de Datos
}

export class EstiloVida {
    constructor(
        public id: number,
        public persona_id: number,
        public toxicomanias: Toxicomanias,
        public enfermedades_cronicas: EnfermedadesCronicas,
        public actividad_fisica: boolean,
        public alimentacion: Alimentacion,
        public higiene_personal: boolean
    ) {}
}
export class ServiciosBasicos {
    constructor(
        public id: number,
        public cocina_separada: boolean,
        public energia_electrica: boolean,
        public agua_entubada: boolean,
        public drenaje: boolean,
        public wc: boolean,
        public letrina: boolean
    ) {}
}
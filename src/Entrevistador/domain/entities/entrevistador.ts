export class Entrevistador {
    constructor(
        public id: number,
        public nombre: string,
        public fecha_registro: Date,
        public unidad_salud_id: number,
        public datos_laborales_id: number
    ) {}
}

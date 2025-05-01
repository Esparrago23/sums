export class Cedula {
    constructor(
        public id: number,
        public unidad_salud_id: number,
        public entrevistador_id: number,
        public familia_id: number,
        public esquema_vacunacion_id: number,
        public composicion_familiar_id: number
    ) {}
}

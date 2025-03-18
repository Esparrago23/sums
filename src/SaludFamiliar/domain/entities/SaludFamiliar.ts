export class SaludFamiliar {
    constructor(
        public id: number,
        public persona_id: number,
        public seguridad_social: boolean,
        public enfermedades: boolean,
        public embarazo_atencion: boolean,
        public alimentacion: string,
        public higiene: boolean,
        public alcoholismo: boolean,
        public tabaquismo: boolean,
        public tamizaje_cervico_uterino: boolean,
        public tamizaje_cancer_mama: boolean,
        public discapacidad: boolean,
        public servicio_salud_frecuencia: boolean,
        public motivo_uso_servicio_salud: boolean
    ){}
}
export class Persona {
    constructor(
        public id: number,
        public familia_id: number,
        public nombre_completo: string,
        public fecha_nacimiento: Date,
        public edad: number,
        public sexo: string,
        public estado_civil: string,
        public escolaridad: string,
        public lengua: string,
        public alfabetizacion: boolean,
        public parentesco: string,
        public ocupacion: string,
        public ingreso: number,
        public seguridad_social: boolean,
        public discapacidad: boolean,
        public tipo_discapacidad: string
    ) {}
}
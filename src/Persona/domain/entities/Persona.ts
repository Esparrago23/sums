export class Persona {
    constructor(
        public id: number,
        public familia_id: number,
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
        public tipo_discapacidad: string,
        public primer_nombre: string,
        public segundo_nombre: string,
        public apellido_paterno: string,
        public apellido_materno: string,
    ) {}
}
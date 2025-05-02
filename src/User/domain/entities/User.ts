export class User {
    constructor(
        public idUsuario: string,
        public nombreUsuario: string,
        public contraseña: string,
        public rol: string,
        public fechaRegistro?: Date,
        public activo: boolean = true
    ) {}
}
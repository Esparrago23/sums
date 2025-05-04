// src/User/domain/entities/User.ts
export class User {
    constructor(
        public id: number,
        public nombre_usuario: string,
        public contrasena: string,
        public rol_id: number,
        public fecha_registro?: Date,
        public activo: boolean = true,
        public unidad_salud_id?: number,
        public datos_laborales_id?: number
    ) {}
}
// src/Entrevistador/domain/entities/entrevistador.ts
export class Entrevistador {
    constructor(
        public id: number,
        public nombre: string,
        public fecha_registro: Date,
        public unidad_salud_id: number,
        public datos_laborales_id: number,
        public rol_id: number  // Nuevo campo para asociar con la tabla rol
    ) {}
}
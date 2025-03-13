interface Vacunas {
  // Falta Estructura de Base de Datos
}

export class Vacunacion {
  constructor(
    public id: number,
    public persona_id: number,
    public vacunas: Vacunas,
    public dosis: number,
    public fecha_aplicacion: Date
  ) {}
}

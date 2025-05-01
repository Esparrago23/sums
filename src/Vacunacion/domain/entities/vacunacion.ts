
export class Vacunacion {
  constructor(
    public id: number,
    public persona_id: number,
    public fecha_aplicacion: Date,
    public dosis_id: number,
  ) {}
}

class Visitas {

}
export class ServicioSalud {
  constructor(
    public id: number,
    public persona_id: number,
    public visitas: Visitas,
    public frecuencia: string,
  ) {}
}
import { Vacunacion } from "../domain/entities/vacunacion";
import { Ivacunacion } from "../domain/repositories/Ivacunacion";

export class ReadAllVacunacion {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(): Promise<Vacunacion[]> {
    return this.vacunacionRepository.readAll();
  }
}
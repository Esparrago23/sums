import { Vacunacion } from "../domain/entities/vacunacion";
import { Ivacunacion } from "../domain/repositories/Ivacunacion";

export class CreateVacunacionUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(vacunacion: Vacunacion): Promise<Vacunacion> {
    return this.vacunacionRepository.create(vacunacion);
  }
}
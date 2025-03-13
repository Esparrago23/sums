import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { Vacunacion } from "../domain/entities/vacunacion";

export class ReadByIdVacunacionUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(id: number): Promise<Vacunacion> {
    return this.vacunacionRepository.readById(id);
  }
}
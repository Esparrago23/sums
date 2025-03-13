import { Vacunacion } from "../domain/entities/vacunacion";
import { Ivacunacion } from "../domain/repositories/Ivacunacion";

export class UpdateVacunacionUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(id: number, vacunacionData: Partial<Vacunacion>): Promise<Vacunacion | null> {
    const vacunacion = await this.vacunacionRepository.readById(id);
    if (!vacunacion) {
      return null;
    }
    const updatedVacunacion = { ...vacunacion, ...vacunacionData };
    return this.vacunacionRepository.update(updatedVacunacion);
  }
}
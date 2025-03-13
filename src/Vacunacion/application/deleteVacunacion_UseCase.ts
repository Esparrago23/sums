import { Ivacunacion } from "../domain/repositories/Ivacunacion";

export class DeleteVacunacionUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(id: number): Promise<void> {
    await this.vacunacionRepository.delete(id);
  }
}
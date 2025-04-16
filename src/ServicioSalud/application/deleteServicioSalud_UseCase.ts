import { IServicioSaludRepository } from "../domain/repositories/IServicioSaludRepository";

export class DeleteServicioSaludUseCase {
  constructor(private servicioSaludRepository: IServicioSaludRepository) {}

  async execute(id: number): Promise<void> {
    await this.servicioSaludRepository.delete(id);
  }
}
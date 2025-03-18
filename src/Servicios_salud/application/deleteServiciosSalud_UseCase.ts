import { IServiciosSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class DeleteServiciosSaludUseCase {
  constructor(private serviciosSaludRepository: IServiciosSaludRepository) {}

  async execute(id: number): Promise<void> {
    await this.serviciosSaludRepository.delete(id);
  }
}
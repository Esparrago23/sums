import { IServiciosBasicosRepository } from "../domain/repository/IServiciosBasicosRepository";

export class DeleteServiciosBasicosUseCase {
  constructor(private serviciosBasicosRepository: IServiciosBasicosRepository) {}

  async execute(id: number): Promise<void> {
    await this.serviciosBasicosRepository.delete(id);
  }
}
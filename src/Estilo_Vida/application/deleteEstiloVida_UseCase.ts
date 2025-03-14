import { IEstiloVidaRepository } from "../domain/repositories/IEstiloVidaRepository";

export class DeleteEstiloVidaUseCase {
  constructor(private estiloVidaRepository: IEstiloVidaRepository) {}

  async execute(id: number): Promise<void> {
    await this.estiloVidaRepository.delete(id);
  }
}
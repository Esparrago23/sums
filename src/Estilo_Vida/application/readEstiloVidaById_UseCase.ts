import { EstiloVida } from "../domain/entities/estiloVida";
import { IEstiloVidaRepository } from "../domain/repositories/IEstiloVidaRepository";

export class ReadEstiloVidaByIdUseCase {
  constructor(private estiloVidaRepository: IEstiloVidaRepository) {}

  async execute(id: number): Promise<EstiloVida | null> {
    return this.estiloVidaRepository.readById(id);
  }
}
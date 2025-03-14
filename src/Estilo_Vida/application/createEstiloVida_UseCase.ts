import { EstiloVida } from "../domain/entities/estiloVida";
import { IEstiloVidaRepository } from "../domain/repositories/IEstiloVidaRepository";

export class CreateEstiloVidaUseCase {
  constructor(private estiloVidaRepository: IEstiloVidaRepository) {}

  async execute(estiloVida: EstiloVida): Promise<EstiloVida> {
    return this.estiloVidaRepository.create(estiloVida);
  }
}
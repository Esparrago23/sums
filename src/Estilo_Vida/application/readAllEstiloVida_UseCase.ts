import { EstiloVida } from "../domain/entities/estiloVida";
import { IEstiloVidaRepository } from "../domain/repositories/IEstiloVidaRepository";

export class ReadAllEstiloVidaUseCase {
  constructor(private estiloVidaRepository: IEstiloVidaRepository) {}

  async execute(): Promise<EstiloVida[]> {
    return this.estiloVidaRepository.readAll();
  }
}
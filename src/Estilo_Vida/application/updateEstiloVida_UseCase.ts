import { EstiloVida } from "../domain/entities/estiloVida";
import { IEstiloVidaRepository } from "../domain/repositories/IEstiloVidaRepository";

export class UpdateEstiloVidaUseCase {
  constructor(private estiloVidaRepository: IEstiloVidaRepository) {}

  async execute(id: number, estiloVidaData: Partial<EstiloVida>): Promise<EstiloVida | null> {
    const estiloVida = await this.estiloVidaRepository.readById(id);
    if (!estiloVida) {
      return null;
    }

    const updatedEstiloVida = { ...estiloVida, ...estiloVidaData };
    return this.estiloVidaRepository.update(updatedEstiloVida);
  }
}
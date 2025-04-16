import { ConvivenciaAnimales } from "../domain/entities/ConvivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimales";

export class UpdateConvivenciaAnimalesUseCase {
  constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

  async execute(id: number, convivenciaAnimales: Partial<ConvivenciaAnimales>): Promise<ConvivenciaAnimales | null> {
    const convivencia = await this.convivenciaAnimalesRepository.readById(id);
    if (!convivencia) {
      return null;
    }
    const updatedConvivencia = { ...convivencia, ...convivenciaAnimales };
    return this.convivenciaAnimalesRepository.update(updatedConvivencia);   
    }
}
import { ConvivenciaAnimales } from "../domain/entities/ConvivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimales";

export class CreateConvivenciaAnimalesUseCase {
  constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

  async execute(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales> {
    return this.convivenciaAnimalesRepository.create(convivenciaAnimales);
  }
}
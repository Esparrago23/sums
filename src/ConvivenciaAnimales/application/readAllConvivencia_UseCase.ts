import { ConvivenciaAnimales } from "../domain/entities/ConvivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimales";

export class ReadAllConvivenciaUseCase {
  constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

  async execute(): Promise<ConvivenciaAnimales[]> {
    return this.convivenciaAnimalesRepository.readAll();
  }
}
import { ConvivenciaAnimales } from "../domain/entities/convivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimalesRepository";

export class CreateConvivenciaAnimalesUseCase {
    constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

    async execute(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales> {
        return this.convivenciaAnimalesRepository.create(convivenciaAnimales);
    }
}
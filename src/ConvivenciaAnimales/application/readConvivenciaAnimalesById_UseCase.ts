import { ConvivenciaAnimales } from "../domain/entities/convivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimalesRepository";

export class ReadConvivenciaAnimalesByIdUseCase {
    constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

    async execute(id: number): Promise<ConvivenciaAnimales | null> {
        return this.convivenciaAnimalesRepository.readById(id);
    }
}
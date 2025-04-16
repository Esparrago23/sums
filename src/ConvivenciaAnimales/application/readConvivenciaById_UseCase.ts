import { ConvivenciaAnimales } from "../domain/entities/ConvivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimales";

export class ReadConvivenciaByIdUseCase {
    constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}
    
    async execute(id: number): Promise<ConvivenciaAnimales | null> {
        return this.convivenciaAnimalesRepository.readById(id);
    }
}
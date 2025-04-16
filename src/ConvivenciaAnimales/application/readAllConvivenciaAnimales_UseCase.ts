import { ConvivenciaAnimales } from "../domain/entities/convivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimalesRepository";

export class ReadAllConvivenciaAnimalesUseCase {
    constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

    async execute(): Promise<ConvivenciaAnimales[]> {
        return this.convivenciaAnimalesRepository.readAll();
    }
}
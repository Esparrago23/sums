import { ConvivenciaAnimales } from "../domain/entities/convivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimalesRepository";

export class UpdateConvivenciaAnimalesUseCase {
    constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

    async execute(id: number, convivenciaAnimalesData: Partial<ConvivenciaAnimales>): Promise<ConvivenciaAnimales | null> {
        const convivenciaAnimales = await this.convivenciaAnimalesRepository.readById(id);
        if (!convivenciaAnimales) {
            return null;
        }

        const updatedConvivenciaAnimales = { ...convivenciaAnimales, ...convivenciaAnimalesData };
        return this.convivenciaAnimalesRepository.update(updatedConvivenciaAnimales);
    }
}
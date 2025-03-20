import { DatosLaborales } from "../domain/entities/datosLaborales";
import { IDatosLaboralesRepository } from "../domain/repositories/IDatosLaboralesRepository";

export class UpdateDatosLaboralesUseCase {
    constructor(private datosLaboralesRepository: IDatosLaboralesRepository) {}

    async execute(id: number, datosLaboralesData: Partial<DatosLaborales>): Promise<DatosLaborales | null> {
        const datosLaborales = await this.datosLaboralesRepository.readById(id);
        if (!datosLaborales) {
            return null;
        }

        const updatedDatosLaborales = { ...datosLaborales, ...datosLaboralesData };
        return this.datosLaboralesRepository.update(updatedDatosLaborales);
    }
}
import { DatosLaborales } from "../domain/entities/datosLaborales";
import { IDatosLaboralesRepository } from "../domain/repositories/IDatosLaboralesRepository";

export class ReadDatosLaboralesByIdUseCase {
    constructor(private datosLaboralesRepository: IDatosLaboralesRepository) {}

    async execute(id: number): Promise<DatosLaborales | null> {
        return this.datosLaboralesRepository.readById(id);
    }
}
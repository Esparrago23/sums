import { DatosLaborales } from "../domain/entities/datosLaborales";
import { IDatosLaboralesRepository } from "../domain/repositories/IDatosLaboralesRepository";

export class ReadAllDatosLaboralesUseCase {
    constructor(private datosLaboralesRepository: IDatosLaboralesRepository) {}

    async execute(): Promise<DatosLaborales[]> {
        return this.datosLaboralesRepository.readAll();
    }
}
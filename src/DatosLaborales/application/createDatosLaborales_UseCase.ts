import { DatosLaborales } from "../domain/entities/datosLaborales";
import { IDatosLaboralesRepository } from "../domain/repositories/IDatosLaboralesRepository";

export class CreateDatosLaboralesUseCase {
    constructor(private datosLaboralesRepository: IDatosLaboralesRepository) {}

    async execute(datosLaborales: DatosLaborales): Promise<DatosLaborales> {
        return this.datosLaboralesRepository.create(datosLaborales);
    }
}

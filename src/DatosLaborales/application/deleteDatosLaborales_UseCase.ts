import { IDatosLaboralesRepository } from "../domain/repositories/IDatosLaboralesRepository";

export class DeleteDatosLaboralesUseCase {
    constructor(private datosLaboralesRepository: IDatosLaboralesRepository) {}

    async execute(id: number): Promise<void> {
        await this.datosLaboralesRepository.delete(id);
    }
}
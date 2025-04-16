import { Vacunas } from "../domain/entities/Vacunas";
import { IVacunasRepository } from "../domain/repositories/IVacunasRepository";

export class UpdateVacunasUseCase {
    constructor(private vacunasRepository: IVacunasRepository) {}

    async execute(id: number, vacunasData: Partial<Vacunas>): Promise<Vacunas | null> {
        const vacunas = await this.vacunasRepository.readById(id);
        if (!vacunas) {
            return null;
        }

        const updatedVacunas = { ...vacunas, ...vacunasData };
        return this.vacunasRepository.update(updatedVacunas);
    }
}
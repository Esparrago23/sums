import { Vacunas } from "../domain/entities/Vacunas";
import { IVacunasRepository } from "../domain/repositories/IVacunasRepository";

export class ReadVacunasByIdUseCase {
    constructor(private vacunasRepository: IVacunasRepository) {}

    async execute(id: number): Promise<Vacunas | null> {
        return this.vacunasRepository.readById(id);
    }
}
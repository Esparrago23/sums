import { Vacunas } from "../domain/entities/Vacunas";
import { IVacunasRepository } from "../domain/repositories/IVacunasRepository";

export class CreateVacunasUseCase {
    constructor(private vacunasRepository: IVacunasRepository) {}

    async execute(vacunas: Vacunas): Promise<Vacunas> {
        return this.vacunasRepository.create(vacunas);
    }
}
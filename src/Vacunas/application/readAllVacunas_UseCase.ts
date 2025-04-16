import { Vacunas } from "../domain/entities/Vacunas";
import { IVacunasRepository } from "../domain/repositories/IVacunasRepository";

export class ReadAllVacunasUseCase {
    constructor(private vacunasRepository: IVacunasRepository) {}

    async execute(): Promise<Vacunas[]> {
        return this.vacunasRepository.readAll();
    }
}
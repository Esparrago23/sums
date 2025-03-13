import { MiembroFamilia } from "../domain/entities/MiembroFamilia";
import { IMiembroFamiliaRepository } from "../domain/repositories/IMiembroFamiliaRepository";

export class ReadAllMiembroFamiliaUseCase {
    constructor(private miembroFamiliaRepository: IMiembroFamiliaRepository) {}

    async execute(): Promise<MiembroFamilia[]> {
        return this.miembroFamiliaRepository.readAll();
    }
}
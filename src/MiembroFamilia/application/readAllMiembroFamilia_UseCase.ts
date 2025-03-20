import { MiembroFamilia } from "../domain/entities/miembroFamilia";
import { IMiembroFamiliaRepository } from "../domain/repositories/IMiembroFamiliaRepository";

export class ReadAllMiembroFamiliaUseCase {
    constructor(private miembroFamiliaRepository: IMiembroFamiliaRepository) {}

    async execute(): Promise<MiembroFamilia[]> {
        return this.miembroFamiliaRepository.readAll();
    }
}
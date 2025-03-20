import { MiembroFamilia } from "../domain/entities/miembroFamilia";
import { IMiembroFamiliaRepository } from "../domain/repositories/IMiembroFamiliaRepository";

export class ReadMiembroFamiliaByIdUseCase {
    constructor(private miembroFamiliaRepository: IMiembroFamiliaRepository) {}

    async execute(id: number): Promise<MiembroFamilia | null> {
        return this.miembroFamiliaRepository.readById(id);
    }
}

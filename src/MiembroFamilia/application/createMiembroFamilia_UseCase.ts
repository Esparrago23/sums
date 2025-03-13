import { MiembroFamilia } from "../domain/entities/MiembroFamilia";
import { IMiembroFamiliaRepository } from "../domain/repositories/IMiembroFamiliaRepository";

export class CreateMiembroFamiliaUseCase {
    constructor(private miembroFamiliaRepository: IMiembroFamiliaRepository) {}

    async execute(miembroFamilia: MiembroFamilia): Promise<MiembroFamilia> {
        return this.miembroFamiliaRepository.create(miembroFamilia);
    }
}
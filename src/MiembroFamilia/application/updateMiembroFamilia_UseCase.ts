import { MiembroFamilia } from "../domain/entities/miembroFamilia";
import { IMiembroFamiliaRepository } from "../domain/repositories/IMiembroFamiliaRepository";

export class UpdateMiembroFamiliaUseCase {
    constructor(private miembroFamiliaRepository: IMiembroFamiliaRepository) {}

    async execute(id: number, miembroFamiliaData: Partial<MiembroFamilia>): Promise<MiembroFamilia | null> {
        const miembroFamilia = await this.miembroFamiliaRepository.readById(id);
        if (!miembroFamilia) {
            return null;
        }

        const updatedMiembroFamilia = { ...miembroFamilia, ...miembroFamiliaData };
        return this.miembroFamiliaRepository.update(updatedMiembroFamilia);
    }
}
import { Familia } from "../domain/entities/familia";
import { IFamiliaRepository } from "../domain/repositories/IFamiliaRepository";

export class UpdateFamiliaUseCase {
    constructor(private familiaRepository: IFamiliaRepository) {}

    async execute(id: number, familiaData: Partial<Familia>): Promise<Familia | null> {
        const familia = await this.familiaRepository.readById(id);
        if (!familia) {
            return null;
        }

        const updatedFamilia = { ...familia, ...familiaData };
        return this.familiaRepository.update(updatedFamilia);
    }
}

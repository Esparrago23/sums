import { Dosis } from "../domain/entities/Dosis";
import { IDosisRepository } from "../domain/repositories/IDosisRepository";

export class UpdateDosisUseCase {
    constructor(private dosisRepository: IDosisRepository) {}

    async execute(id: number, dosisData: Partial<Dosis>): Promise<Dosis | null> {
        const dosis = await this.dosisRepository.readById(id);
        if (!dosis) {
            return null;
        }

        const updatedDosis = { ...dosis, ...dosisData };
        return this.dosisRepository.update(updatedDosis);
    }
}
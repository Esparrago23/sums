import { Dosis } from "../domain/entities/Dosis";
import { IDosisRepository } from "../domain/repositories/IDosisRepository";

export class CreateDosisUseCase {
    constructor(private dosisRepository: IDosisRepository) {}

    async execute(dosis: Dosis): Promise<Dosis> {
        return this.dosisRepository.create(dosis);
    }
}
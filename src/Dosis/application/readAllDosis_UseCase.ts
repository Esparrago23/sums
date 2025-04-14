import { Dosis } from "../domain/entities/Dosis";
import { IDosisRepository } from "../domain/repositories/IDosisRepository";

export class ReadAllDosisUseCase {
    constructor(private dosisRepository: IDosisRepository) {}

    async execute(): Promise<Dosis[]> {
        return this.dosisRepository.readAll();
    }
}
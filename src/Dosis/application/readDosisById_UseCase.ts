import { Dosis } from "../domain/entities/Dosis";
import { IDosisRepository } from "../domain/repositories/IDosisRepository";

export class ReadDosisByIdUseCase {
    constructor(private dosisRepository: IDosisRepository) {}

    async execute(id: number): Promise<Dosis | null> {
        return this.dosisRepository.readById(id);
    }
}
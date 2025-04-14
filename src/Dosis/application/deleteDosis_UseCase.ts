import { IDosisRepository } from "../domain/repositories/IDosisRepository";

export class DeleteDosisUseCase {
    constructor(private dosisRepository: IDosisRepository) {}

    async execute(id: number): Promise<void> {
        await this.dosisRepository.delete(id);
    }
}
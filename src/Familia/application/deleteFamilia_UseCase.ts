import { IFamiliaRepository } from "../domain/repositories/IFamiliaRepository";

export class DeleteFamiliaUseCase {
    constructor(private familiaRepository: IFamiliaRepository) {}

    async execute(id: number): Promise<void> {
        await this.familiaRepository.delete(id);
    }
}
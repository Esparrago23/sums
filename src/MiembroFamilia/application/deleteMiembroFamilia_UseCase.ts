import { IMiembroFamiliaRepository } from "../domain/repositories/IMiembroFamiliaRepository";

export class DeleteMiembroFamiliaUseCase {
    constructor(private miembroFamiliaRepository: IMiembroFamiliaRepository) {}

    async execute(id: number): Promise<void> {
        await this.miembroFamiliaRepository.delete(id);
    }
}
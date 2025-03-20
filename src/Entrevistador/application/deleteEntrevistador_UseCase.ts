import { IEntrevistadorRepository } from "../domain/repositories/IEntrevistadorRepository";

export class DeleteEntrevistadorUseCase {
    constructor(private entrevistadorRepository: IEntrevistadorRepository) {}

    async execute(id: number): Promise<void> {
        await this.entrevistadorRepository.delete(id);
    }
}

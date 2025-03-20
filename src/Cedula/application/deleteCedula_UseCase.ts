import { ICedulaRepository } from "../domain/repositories/ICedulaRepository";

export class DeleteCedulaUseCase {
    constructor(private cedulaRepository: ICedulaRepository) {}

    async execute(id: number): Promise<void> {
        await this.cedulaRepository.delete(id);
    }
}
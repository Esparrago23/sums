import { Entrevistador } from "../domain/entities/entrevistador";
import { IEntrevistadorRepository } from "../domain/repositories/IEntrevistadorRepository";

export class UpdateEntrevistadorUseCase {
    constructor(private entrevistadorRepository: IEntrevistadorRepository) {}

    async execute(id: number, entrevistadorData: Partial<Entrevistador>): Promise<Entrevistador | null> {
        const entrevistador = await this.entrevistadorRepository.readById(id);
        if (!entrevistador) return null;

        const updatedEntrevistador = { ...entrevistador, ...entrevistadorData };
        return this.entrevistadorRepository.update(updatedEntrevistador);
    }
}

import { Entrevistador } from "../domain/entities/entrevistador";
import { IEntrevistadorRepository } from "../domain/repositories/IEntrevistadorRepository";

export class ReadEntrevistadorByIdUseCase {
    constructor(private entrevistadorRepository: IEntrevistadorRepository) {}

    async execute(id: number): Promise<Entrevistador | null> {
        return this.entrevistadorRepository.readById(id);
    }
}

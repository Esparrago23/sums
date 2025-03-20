import { Entrevistador } from "../domain/entities/entrevistador";
import { IEntrevistadorRepository } from "../domain/repositories/IEntrevistadorRepository";

export class CreateEntrevistadorUseCase {
    constructor(private entrevistadorRepository: IEntrevistadorRepository) {}

    async execute(entrevistador: Entrevistador): Promise<Entrevistador> {
        return this.entrevistadorRepository.create(entrevistador);
    }
}

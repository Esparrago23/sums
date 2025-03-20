import { Entrevistador } from "../domain/entities/entrevistador";
import { IEntrevistadorRepository } from "../domain/repositories/IEntrevistadorRepository";

export class ReadAllEntrevistadorUseCase {
    constructor(private entrevistadorRepository: IEntrevistadorRepository) {}

    async execute(): Promise<Entrevistador[]> {
        return this.entrevistadorRepository.readAll();
    }
}

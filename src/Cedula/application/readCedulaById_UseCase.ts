import { Cedula } from "../domain/entities/cedula";
import { ICedulaRepository } from "../domain/repositories/ICedulaRepository";

export class ReadCedulaByIdUseCase {
    constructor(private cedulaRepository: ICedulaRepository) {}

    async execute(id: number): Promise<Cedula | null> {
        return this.cedulaRepository.readById(id);
    }
}
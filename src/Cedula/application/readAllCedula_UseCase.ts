import { Cedula } from "../domain/entities/cedula";
import { ICedulaRepository } from "../domain/repositories/ICedulaRepository";

export class ReadAllCedulaUseCase {
    constructor(private cedulaRepository: ICedulaRepository) {}

    async execute(): Promise<Cedula[]> {
        return this.cedulaRepository.readAll();
    }
}
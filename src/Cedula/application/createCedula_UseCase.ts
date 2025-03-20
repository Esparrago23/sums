import { Cedula } from "../domain/entities/cedula";
import { ICedulaRepository } from "../domain/repositories/ICedulaRepository";

export class CreateCedulaUseCase {
    constructor(private cedulaRepository: ICedulaRepository) {}

    async execute(cedula: Cedula): Promise<Cedula> {
        return this.cedulaRepository.create(cedula);
    }
}
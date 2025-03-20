import { Vivienda } from "../domain/entities/vivienda";
import { IViviendaRepository } from "../domain/repositories/IViviendaRepository";

export class ReadAllViviendaUseCase {
    constructor(private viviendaRepository: IViviendaRepository) {}

    async execute(): Promise<Vivienda[]> {
        return this.viviendaRepository.readAll();
    }
}

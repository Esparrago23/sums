import { Vivienda } from "../domain/entities/Vivienda";
import { IViviendaRepository } from "../domain/repositories/IViviendaRepository";

export class ReadViviendaByIdUseCase {
    constructor(private viviendaRepository: IViviendaRepository) {}

    async execute(id: number): Promise<Vivienda | null> {
        return this.viviendaRepository.readById(id);
    }
}
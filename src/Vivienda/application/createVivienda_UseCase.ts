import { Vivienda } from "../domain/entities/Vivienda";
import { IViviendaRepository } from "../domain/repositories/IViviendaRepository";

export class CreateViviendaUseCase {
    constructor(private viviendaRepository: IViviendaRepository) {}

    async execute(vivienda: Vivienda): Promise<Vivienda> {
        return this.viviendaRepository.create(vivienda);
    }
}
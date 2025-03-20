import { Vivienda } from "../domain/entities/vivienda";
import { IViviendaRepository } from "../domain/repositories/IViviendaRepository";

export class UpdateViviendaUseCase {
    constructor(private viviendaRepository: IViviendaRepository) {}

    async execute(id: number, viviendaData: Partial<Vivienda>): Promise<Vivienda | null> {
        const vivienda = await this.viviendaRepository.readById(id);
        if (!vivienda) {
            return null;
        }

        const updatedVivienda = { ...vivienda, ...viviendaData };
        return this.viviendaRepository.update(updatedVivienda);
    }
}
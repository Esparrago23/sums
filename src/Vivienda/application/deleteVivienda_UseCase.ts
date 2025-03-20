import { IViviendaRepository } from "../domain/repositories/IViviendaRepository";

export class DeleteViviendaUseCase {
    constructor(private viviendaRepository: IViviendaRepository) {}

    async execute(id: number): Promise<void> {
        await this.viviendaRepository.delete(id);
    }
}
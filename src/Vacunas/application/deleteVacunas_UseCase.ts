import { IVacunasRepository } from "../domain/repositories/IVacunasRepository";

export class DeleteVacunasUseCase {
    constructor(private vacunasRepository: IVacunasRepository) {}

    async execute(id: number): Promise<void> {
        await this.vacunasRepository.delete(id);
    }
}
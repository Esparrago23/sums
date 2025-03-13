import { Familia } from "../domain/entities/Familia";
import { IFamiliaRepository } from "../domain/repositories/IFamiliaRepository";

export class ReadFamiliaByIdUseCase {
    constructor(private familiaRepository: IFamiliaRepository) {}

    async execute(id: number): Promise<Familia | null> {
        return this.familiaRepository.readById(id);
    }
}
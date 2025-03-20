import { Familia } from "../domain/entities/familia";
import { IFamiliaRepository } from "../domain/repositories/IFamiliaRepository";

export class ReadAllFamiliaUseCase {
    constructor(private familiaRepository: IFamiliaRepository) {}

    async execute(): Promise<Familia[]> {
        return this.familiaRepository.readAll();
    }
}
import { Familia } from "../domain/entities/Familia";
import { IFamiliaRepository } from "../domain/repositories/IFamiliaRepository";

export class CreateFamiliaUseCase {
    constructor(private familiaRepository: IFamiliaRepository) {}

    async execute(familia: Familia): Promise<Familia> {
        return this.familiaRepository.create(familia);
    }
}
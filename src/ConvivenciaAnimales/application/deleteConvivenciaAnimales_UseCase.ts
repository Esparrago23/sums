import { IConvivenciaAnimalesRepository } from "../domain/repositories/IConvivenciaAnimalesRepository";

export class DeleteConvivenciaAnimalesUseCase {
    constructor(private convivenciaAnimalesRepository: IConvivenciaAnimalesRepository) {}

    async execute(id: number): Promise<void> {
        await this.convivenciaAnimalesRepository.delete(id);
    }
}
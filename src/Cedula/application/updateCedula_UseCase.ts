import { Cedula } from "../domain/entities/cedula";
import { ICedulaRepository } from "../domain/repositories/ICedulaRepository";

export class UpdateCedulaUseCase {
    constructor(private cedulaRepository: ICedulaRepository) {}

    async execute(id: number, cedulaData: Partial<Cedula>): Promise<Cedula | null> {
        const cedula = await this.cedulaRepository.readById(id);
        if (!cedula) {
            return null;
        }

        const updatedCedula = { ...cedula, ...cedulaData };
        return this.cedulaRepository.update(updatedCedula);
    }
}
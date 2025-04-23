import { IServicioSaludRepository} from "../domain/repositories/IServiciosSaludRepository";
import { ServicioSalud} from "../domain/entities/serviciosSalud";

export class DeleteServicioSaludUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(id: number): Promise<void> {
        await this.servicioSaludRepository.delete(id);
    }
}
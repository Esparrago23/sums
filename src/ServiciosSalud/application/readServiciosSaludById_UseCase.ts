import { ServicioSalud} from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository} from "../domain/repositories/IServiciosSaludRepository";

export class ReadServicioSaludByIdUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(id: number): Promise<ServicioSalud | null> {
        return this.servicioSaludRepository.readById(id);
    }
}
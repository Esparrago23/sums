import { ServicioSalud} from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository} from "../domain/repositories/IServiciosSaludRepository";

export class ReadAllServicioSaludUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(): Promise<ServicioSalud[]> {
        return this.servicioSaludRepository.readAll();
    }
}
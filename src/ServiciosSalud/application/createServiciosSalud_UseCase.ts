import { ServicioSalud} from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository} from "../domain/repositories/IServiciosSaludRepository";

export class CreateServicioSaludUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(servicioSalud: ServicioSalud): Promise<ServicioSalud> {
        return this.servicioSaludRepository.create(servicioSalud);
    }
}
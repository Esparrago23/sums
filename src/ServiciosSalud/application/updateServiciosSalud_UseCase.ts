import { ServicioSalud} from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository} from "../domain/repositories/IServiciosSaludRepository";

export class UpdateServicioSaludUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(id: number, servicioSaludData: Partial<ServicioSalud>): Promise<ServicioSalud | null> {
        const servicioSalud = await this.servicioSaludRepository.readById(id);
        if (!servicioSalud) {
            return null;
        }

        const updatedServicioSalud = { ...servicioSalud, ...servicioSaludData };
        return this.servicioSaludRepository.update(updatedServicioSalud);
    }
}
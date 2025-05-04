import { ServicioSalud } from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class EliminarVisitaUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(servicioId: number, fecha: string): Promise<ServicioSalud> {
        return this.servicioSaludRepository.eliminarVisita(servicioId, fecha);
    }
}
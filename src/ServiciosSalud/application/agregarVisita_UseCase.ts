import { ServicioSalud, Visita } from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class AgregarVisitaUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(servicioId: number, visita: Visita): Promise<ServicioSalud> {
        return this.servicioSaludRepository.agregarVisita(servicioId, visita);
    }
}
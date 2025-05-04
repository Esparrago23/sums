import { Visita } from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class ObtenerUltimaVisitaUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(servicioId: number): Promise<Visita | null> {
        return this.servicioSaludRepository.obtenerUltimaVisita(servicioId);
    }
}
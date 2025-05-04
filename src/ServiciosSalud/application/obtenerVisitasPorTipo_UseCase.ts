import { Visita } from "../domain/entities/serviciosSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class ObtenerVisitasPorTipoUseCase {
    constructor(private servicioSaludRepository: IServicioSaludRepository) {}

    async execute(servicioId: number, tipo: string): Promise<Visita[]> {
        return this.servicioSaludRepository.obtenerVisitasPorTipo(servicioId, tipo);
    }
}
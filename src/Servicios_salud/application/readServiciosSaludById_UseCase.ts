import { ServiciosSalud } from "../domain/entities/servicios_salud";
import { IServiciosSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class ReadServiciosSaludByIdUseCase {
  constructor(private serviciosSaludRepository: IServiciosSaludRepository) {}

  async execute(id: number): Promise<ServiciosSalud | null> {
    return this.serviciosSaludRepository.readById(id);
  }
}
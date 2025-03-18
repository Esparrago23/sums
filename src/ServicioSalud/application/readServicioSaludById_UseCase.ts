import { ServicioSalud } from "../domain/entities/ServicioSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServicioSaludRepository";

export class ReadServicioSaludByIdUseCase {
  constructor(private servicioSaludRepository: IServicioSaludRepository) {}

  async execute(id: number): Promise<ServicioSalud | null> {
    return this.servicioSaludRepository.readById(id);
  }
}

import { ServicioSalud } from "../domain/entities/ServicioSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServicioSaludRepository";

export class ReadAllServicioSaludUseCase {
  constructor(private servicioSaludRepository: IServicioSaludRepository) {}

  async execute(): Promise<ServicioSalud[]> {
    return this.servicioSaludRepository.readAll();
  }
}

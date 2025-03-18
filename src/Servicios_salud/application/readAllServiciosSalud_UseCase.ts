import { ServiciosSalud } from "../domain/entities/servicios_salud";
import { IServiciosSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class ReadAllServiciosSaludUseCase {
  constructor(private serviciosSaludRepository: IServiciosSaludRepository) {}

  async execute(): Promise<ServiciosSalud[]> {
    return this.serviciosSaludRepository.readAll();
  }
}
import { ServicioSalud } from "../domain/entities/ServicioSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServicioSaludRepository";

export class CreateServicioSaludUseCase {
  constructor(private servicioSaludRepository: IServicioSaludRepository) {}

  async execute(servicioSalud: ServicioSalud): Promise<ServicioSalud> {
    return this.servicioSaludRepository.create(servicioSalud);
  }
}

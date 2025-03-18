import { ServiciosSalud } from "../domain/entities/servicios_salud";
import { IServiciosSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class CreateServiciosSaludUseCase {
  constructor(private serviciosSaludRepository: IServiciosSaludRepository) {}

  async execute(serviciosSalud: ServiciosSalud): Promise<ServiciosSalud> {
    return this.serviciosSaludRepository.create(serviciosSalud);
  }
}
import { ServiciosSalud } from "../domain/entities/servicios_salud";
import { IServiciosSaludRepository } from "../domain/repositories/IServiciosSaludRepository";

export class UpdateServiciosSaludUseCase {
  constructor(private serviciosSaludRepository: IServiciosSaludRepository) {}

  async execute(id: number, serviciosSaludData: Partial<ServiciosSalud>): Promise<ServiciosSalud | null> {
    const serviciosSalud = await this.serviciosSaludRepository.readById(id);
    if (!serviciosSalud) {
      return null;
    }

    const updatedServiciosSalud = { ...serviciosSalud, ...serviciosSaludData };
    return this.serviciosSaludRepository.update(updatedServiciosSalud);
  }
}
import { ServicioSalud } from "../domain/entities/servicioSalud";
import { IServicioSaludRepository } from "../domain/repositories/IServicioSaludRepository";

export class UpdateServicioSaludUseCase {
  constructor(private servicioSaludRepository: IServicioSaludRepository) {}

  async execute(id: number, servicioSaludData: Partial<ServicioSalud>): Promise<ServicioSalud | null> {
    const servicioSalud = await this.servicioSaludRepository.readById(id);
    if (!servicioSalud) {
      return null;
    }

    const updatedServicioSalud = { ...servicioSalud, ...servicioSaludData };
    return this.servicioSaludRepository.update(updatedServicioSalud);
  }
}
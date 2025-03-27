import { ServiciosBasicos } from "../domain/entities/serviciosBasicos";
import { IServiciosBasicosRepository } from "../domain/repository/IServiciosBasicosRepository";

export class UpdateServiciosBasicosUseCase {
  constructor(private serviciosBasicosRepository: IServiciosBasicosRepository) {}

  async execute(id: number, serviciosBasicosData: Partial<ServiciosBasicos>): Promise<ServiciosBasicos | null> {
    const serviciosBasicos = await this.serviciosBasicosRepository.readById(id);
    if (!serviciosBasicos) {
      return null;
    }

    const updatedServiciosBasicos = { ...serviciosBasicos, ...serviciosBasicosData };
    return this.serviciosBasicosRepository.update(updatedServiciosBasicos);
  }
}
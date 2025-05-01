import { ServiciosBasicos } from "../domain/entities/serviciosBasicos";
import { IServiciosBasicosRepository } from "../domain/repository/IServiciosBasicosRepository";

export class ReadServiciosBasicosByIdUseCase {
  constructor(private serviciosBasicosRepository: IServiciosBasicosRepository) {}

  async execute(id: number): Promise<ServiciosBasicos | null> {
    return this.serviciosBasicosRepository.readById(id);
  }
}
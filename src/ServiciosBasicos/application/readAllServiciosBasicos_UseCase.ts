import { ServiciosBasicos } from "../domain/entities/serviciosBasicos";
import { IServiciosBasicosRepository } from "../domain/repository/IServiciosBasicosRepository";

export class ReadAllServiciosBasicosUseCase {
  constructor(private serviciosBasicosRepository: IServiciosBasicosRepository) {}

  async execute(): Promise<ServiciosBasicos[]> {
    return this.serviciosBasicosRepository.readAll();
  }
}
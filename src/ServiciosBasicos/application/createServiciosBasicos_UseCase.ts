import { ServiciosBasicos } from "../domain/entities/serviciosBasicos";
import { IServiciosBasicosRepository } from "../domain/repository/IServiciosBasicosRepository";

export class CreateServiciosBasicosUseCase {
  constructor(private serviciosBasicosRepository: IServiciosBasicosRepository) {}

  async execute(serviciosBasicos: ServiciosBasicos): Promise<ServiciosBasicos> {
    return this.serviciosBasicosRepository.create(serviciosBasicos);
  }
}
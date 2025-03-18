import { Direccion } from "../domain/entities/direccion";
import { IDireccionRepository } from "../domain/repository/IDireccionRepository";

export class ReadAllDireccionUseCase {
  constructor(private direccionRepository: IDireccionRepository) {}

  async execute(): Promise<Direccion[]> {
    return this.direccionRepository.readAll();
  }
}
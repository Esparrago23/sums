import { Direccion } from "../domain/entities/direccion";
import { IDireccionRepository } from "../domain/repository/IDireccionRepository";

export class CreateDireccionUseCase {
  constructor(private direccionRepository: IDireccionRepository) {}

  async execute(direccion: Direccion): Promise<Direccion> {
    return this.direccionRepository.create(direccion);
  }
}
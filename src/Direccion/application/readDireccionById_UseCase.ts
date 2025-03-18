import { Direccion } from "../domain/entities/direccion";
import { IDireccionRepository } from "../domain/repository/IDireccionRepository";

export class ReadDireccionByIdUseCase {
  constructor(private direccionRepository: IDireccionRepository) {}

  async execute(id: number): Promise<Direccion | null> {
    return this.direccionRepository.readById(id);
  }
}
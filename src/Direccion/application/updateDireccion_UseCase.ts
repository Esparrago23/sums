import { Direccion } from "../domain/entities/direccion";
import { IDireccionRepository } from "../domain/repository/IDireccionRepository";

export class UpdateDireccionUseCase {
  constructor(private direccionRepository: IDireccionRepository) {}

  async execute(id: number, direccionData: Partial<Direccion>): Promise<Direccion | null> {
    const direccion = await this.direccionRepository.readById(id);
    if (!direccion) {
      return null;
    }

    const updatedDireccion = { ...direccion, ...direccionData };
    return this.direccionRepository.update(updatedDireccion);
  }
}
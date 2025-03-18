import { IDireccionRepository } from "../domain/repository/IDireccionRepository";

export class DeleteDireccionUseCase {
  constructor(private direccionRepository: IDireccionRepository) {}

  async execute(id: number): Promise<void> {
    await this.direccionRepository.delete(id);
  }
}
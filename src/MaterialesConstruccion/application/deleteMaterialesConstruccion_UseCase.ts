import { IMaterialesConstruccionRepository } from "../domain/repository/IMaterialesConstruccionRepository";

export class DeleteMaterialesConstruccionUseCase {
  constructor(private materialesConstruccionRepository: IMaterialesConstruccionRepository) {}

  async execute(id: number): Promise<void> {
    await this.materialesConstruccionRepository.delete(id);
  }
}
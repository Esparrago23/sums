import { MaterialesConstruccion } from "../domain/entities/materialesContruccion";
import { IMaterialesConstruccionRepository } from "../domain/repository/IMaterialesConstruccionRepository";

export class ReadMaterialesConstruccionByIdUseCase {
  constructor(private materialesConstruccionRepository: IMaterialesConstruccionRepository) {}

  async execute(id: number): Promise<MaterialesConstruccion | null> {
    return this.materialesConstruccionRepository.readById(id);
  }
}
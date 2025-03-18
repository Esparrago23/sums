import { MaterialesConstruccion } from "../domain/entities/materialesContruccion";
import { IMaterialesConstruccionRepository } from "../domain/repository/IMaterialesConstruccionRepository";

export class ReadAllMaterialesConstruccionUseCase {
  constructor(private materialesConstruccionRepository: IMaterialesConstruccionRepository) {}

  async execute(): Promise<MaterialesConstruccion[]> {
    return this.materialesConstruccionRepository.readAll();
  }
}
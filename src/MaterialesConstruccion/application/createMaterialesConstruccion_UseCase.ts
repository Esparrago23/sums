import { MaterialesConstruccion } from "../domain/entities/materialesContruccion";
import { IMaterialesConstruccionRepository } from "../domain/repository/IMaterialesConstruccionRepository";

export class CreateMaterialesConstruccionUseCase {
  constructor(private materialesConstruccionRepository: IMaterialesConstruccionRepository) {}

  async execute(materialesConstruccion: MaterialesConstruccion): Promise<MaterialesConstruccion> {
    return this.materialesConstruccionRepository.create(materialesConstruccion);
  }
}
import { MaterialesConstruccion } from "../domain/entities/materialesContruccion";
import { IMaterialesConstruccionRepository } from "../domain/repository/IMaterialesConstruccionRepository";

export class UpdateMaterialesConstruccionUseCase {
  constructor(private materialesConstruccionRepository: IMaterialesConstruccionRepository) {}

  async execute(id: number, materialesConstruccionData: Partial<MaterialesConstruccion>): Promise<MaterialesConstruccion | null> {
    const materialesConstruccion = await this.materialesConstruccionRepository.readById(id);
    if (!materialesConstruccion) {
      return null;
    }

    const updatedMaterialesConstruccion = { ...materialesConstruccion, ...materialesConstruccionData };
    return this.materialesConstruccionRepository.update(updatedMaterialesConstruccion);
  }
}
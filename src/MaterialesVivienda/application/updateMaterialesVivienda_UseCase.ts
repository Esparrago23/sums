import { MaterialesVivienda } from "../../MaterialesVivienda/domain/entities/materialesVivienda";
import { IMaterialesViviendaRepository } from "../domain/repository/IMaterialesViviendaRepository";

export class UpdateMaterialesViviendaUseCase {
  constructor(private materialesViviendaRepository: IMaterialesViviendaRepository) {}

  async execute(id: number, materialesViviendaData: Partial<MaterialesVivienda>): Promise<MaterialesVivienda | null> {
    const materialesVivienda = await this.materialesViviendaRepository.readById(id);
    if (!materialesVivienda) {
      return null;
    }

    const updatedMaterialesVivienda = { ...materialesVivienda, ...materialesViviendaData };
    return this.materialesViviendaRepository.update(updatedMaterialesVivienda);
  }
}
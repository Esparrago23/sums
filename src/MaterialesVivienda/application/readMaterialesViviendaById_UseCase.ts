import { MaterialesVivienda } from "../../MaterialesVivienda/domain/entities/materialesVivienda";
import { IMaterialesViviendaRepository } from "../domain/repository/IMaterialesViviendaRepository";

export class ReadMaterialesViviendaByIdUseCase {
  constructor(private materialesViviendaRepository: IMaterialesViviendaRepository) {}

  async execute(id: number): Promise<MaterialesVivienda | null> {
    return this.materialesViviendaRepository.readById(id);
  }
}
import { MaterialesVivienda } from "../../MaterialesVivienda/domain/entities/materialesVivienda";
import { IMaterialesViviendaRepository } from "../domain/repository/IMaterialesViviendaRepository";

export class ReadAllMaterialesViviendaUseCase {
  constructor(private materialesViviendaRepository: IMaterialesViviendaRepository) {}

  async execute(): Promise<MaterialesVivienda[]> {
    return this.materialesViviendaRepository.readAll();
  }
}
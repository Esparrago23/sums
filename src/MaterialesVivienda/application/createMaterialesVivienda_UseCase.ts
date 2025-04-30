import { MaterialesVivienda } from "../../MaterialesVivienda/domain/entities/materialesVivienda";
import { IMaterialesViviendaRepository } from "../domain/repository/IMaterialesViviendaRepository";

export class CreateMaterialesViviendaUseCase {
  constructor(private materialesViviendaRepository: IMaterialesViviendaRepository) {}

  async execute(materialesVivienda: MaterialesVivienda): Promise<MaterialesVivienda> {
    return this.materialesViviendaRepository.create(materialesVivienda);
  }
}
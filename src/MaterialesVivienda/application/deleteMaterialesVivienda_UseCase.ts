import { IMaterialesViviendaRepository } from "../domain/repository/IMaterialesViviendaRepository";

export class DeleteMaterialesViviendaUseCase {
  constructor(private materialesViviendaRepository: IMaterialesViviendaRepository) {}

  async execute(id: number): Promise<void> {
    await this.materialesViviendaRepository.delete(id);
  }
}
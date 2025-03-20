import { SaludFamiliar } from "../domain/entities/SaludFamiliar";
import { ISaludFamiliarRepository } from "../domain/repositories/ISaludFamiliarRepository";

export class CreateSaludFamiliarUseCase {
  constructor(private saludFamiliarRepository: ISaludFamiliarRepository) {}

  async execute(saludFamiliar: SaludFamiliar): Promise<SaludFamiliar> {
    return this.saludFamiliarRepository.create(saludFamiliar);
  }
}

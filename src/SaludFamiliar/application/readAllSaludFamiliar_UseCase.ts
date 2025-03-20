import { SaludFamiliar } from "../domain/entities/SaludFamiliar";
import { ISaludFamiliarRepository } from "../domain/repositories/ISaludFamiliarRepository";

export class ReadAllSaludFamiliarUseCase {
  constructor(private saludFamiliarRepository: ISaludFamiliarRepository) {}

  async execute(): Promise<SaludFamiliar[]> {
    return this.saludFamiliarRepository.readAll();
  }
}

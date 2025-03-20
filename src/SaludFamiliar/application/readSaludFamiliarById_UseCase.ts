import { SaludFamiliar } from "../domain/entities/SaludFamiliar";
import { ISaludFamiliarRepository } from "../domain/repositories/ISaludFamiliarRepository";

export class ReadSaludFamiliarByIdUseCase {
  constructor(private saludFamiliarRepository: ISaludFamiliarRepository) {}

  async execute(id: number): Promise<SaludFamiliar | null> {
    return this.saludFamiliarRepository.readById(id);
  }
}

import { SaludFamiliar } from "../domain/entities/SaludFamiliar";
import { ISaludFamiliarRepository } from "../domain/repositories/ISaludFamiliarRepository";

export class UpdateSaludFamiliarUseCase {
  constructor(private saludFamiliarRepository: ISaludFamiliarRepository) {}

  async execute(
    id: number,
    saludFamiliarData: Partial<SaludFamiliar>
  ): Promise<SaludFamiliar | null> {
    const saludFamiliar = await this.saludFamiliarRepository.readById(id);
    if (!saludFamiliar) {
      return null;
    }

    const updatedSaludFamiliar = { ...saludFamiliar, ...saludFamiliarData };
    return this.saludFamiliarRepository.update(updatedSaludFamiliar);
  }
}

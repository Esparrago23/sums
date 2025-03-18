import { ISaludFamiliarRepository } from "../domain/repositories/ISaludFamiliarRepository";

export class DeleteSaludFamiliarUseCase {
  constructor(private saludFamiliarRepository: ISaludFamiliarRepository) {}

  async execute(id: number): Promise<void> {
    await this.saludFamiliarRepository.delete(id);
  }
}

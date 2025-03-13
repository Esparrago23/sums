import { IPersonaRepository } from "../domain/repositories/IPersonaRepository";

export class DeletePersonaUseCase {
  constructor(private personaRepository: IPersonaRepository) {}

  async execute(id: number): Promise<void> {
    await this.personaRepository.delete(id);
  }
}
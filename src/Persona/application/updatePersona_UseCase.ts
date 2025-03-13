import { Persona } from "../domain/entities/Persona";
import { IPersonaRepository } from "../domain/repositories/IPersonaRepository";

export class UpdatePersonaUseCase {
  constructor(private personaRepository: IPersonaRepository) {}

  async execute(id: number, personaData: Partial<Persona>): Promise<Persona | null> {
    const persona = await this.personaRepository.readById(id);
    if (!persona) {
      return null;
    }

    const updatedPersona = { ...persona, ...personaData };
    return this.personaRepository.update(updatedPersona);
  }
}
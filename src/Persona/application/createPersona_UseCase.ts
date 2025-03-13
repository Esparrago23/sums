import { Persona } from "../domain/entities/Persona";
import { IPersonaRepository } from "../domain/repositories/IPersonaRepository";

export class CreatePersonaUseCase {
  constructor(private personaRepository: IPersonaRepository) {}

  async execute(persona: Persona): Promise<Persona> {
    return this.personaRepository.create(persona);
  }
}
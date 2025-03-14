import { Persona } from "../domain/entities/Persona";
import { IPersonaRepository } from "../domain/repositories/IPersonaRepository";

export class ReadAllPersonaUseCase {
  constructor(private personaRepository: IPersonaRepository) {}

  async execute(): Promise<Persona[]> {
    return this.personaRepository.readAll();
  }
}
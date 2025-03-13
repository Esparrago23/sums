import { Persona } from "../domain/entities/Persona";
import { IPersonaRepository } from "../domain/repositories/IPersonaRepository";

export class ReadPersonaByIdUseCase {
  constructor(private personaRepository: IPersonaRepository) {}

  async execute(id: number): Promise<Persona | null> {
    return this.personaRepository.readById(id);
  }
}
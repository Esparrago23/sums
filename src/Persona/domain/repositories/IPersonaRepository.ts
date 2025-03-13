import { Persona } from "../entities/Persona";

export interface IPersonaRepository {
  create(persona: Persona): Promise<Persona>;
  readAll(): Promise<Persona[]>;
  readById(id: number): Promise<Persona>;
  update(persona: Persona): Promise<Persona>;
  delete(id: number): Promise<void>;
}
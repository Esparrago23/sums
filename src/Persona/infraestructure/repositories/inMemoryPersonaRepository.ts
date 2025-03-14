import { Persona } from '../../domain/entities/Persona';
import { IPersonaRepository } from '../../domain/repositories/IPersonaRepository';

export class InMemoryPersonaRepository implements IPersonaRepository {
  private personas: Persona[] = [];

  create(persona: Persona): Promise<Persona> {
    this.personas.push(persona);
    return Promise.resolve(persona);
  }

  update(persona: Persona): Promise<Persona> {
    const index = this.personas.findIndex(p => p.id === persona.id);
    if (index !== -1) {
      this.personas[index] = persona;
      return Promise.resolve(persona);
    } else {
      return Promise.reject(new Error('Persona not found'));
    }
  }

  readById(id: number): Promise<Persona> {
    const persona = this.personas.find(p => p.id === id);
    if (persona) {
      return Promise.resolve(persona);
    } else {
      return Promise.reject(new Error('Persona not found'));
    }
  }

  delete(id: number): Promise<void> {
    this.personas = this.personas.filter(p => p.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<Persona[]> {
    return Promise.resolve(this.personas);
  }
}
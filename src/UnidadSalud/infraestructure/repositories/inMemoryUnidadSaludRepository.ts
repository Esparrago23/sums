import { UnidadSalud } from "../../domain/entities/UnidadSalud";
import { IUnidadSaludRepository } from "../../domain/repositories/IUnidadSaludRepository";

export class InMemoryUnidadSaludRepository implements IUnidadSaludRepository {
  private unidadesSalud: UnidadSalud[] = [];

  create(unidadSalud: UnidadSalud): Promise<UnidadSalud> {
    this.unidadesSalud.push(unidadSalud);
    return Promise.resolve(unidadSalud);
  }

  update(unidadSalud: UnidadSalud): Promise<UnidadSalud> {
    const index = this.unidadesSalud.findIndex(u => u.id === unidadSalud.id);
    if (index !== -1) {
      this.unidadesSalud[index] = unidadSalud;
      return Promise.resolve(unidadSalud);
    } else {
      return Promise.reject(new Error('UnidadSalud not found'));
    }
  }

  readById(id: number): Promise<UnidadSalud> {
    const unidadSalud = this.unidadesSalud.find(u => u.id === id);
    if (unidadSalud) {
      return Promise.resolve(unidadSalud);
    } else {
      return Promise.reject(new Error('UnidadSalud not found'));
    }
  }

  delete(id: number): Promise<void> {
    this.unidadesSalud = this.unidadesSalud.filter(u => u.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<UnidadSalud[]> {
    return Promise.resolve(this.unidadesSalud);
  }
}
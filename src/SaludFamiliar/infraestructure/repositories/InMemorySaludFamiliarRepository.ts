import { ISaludFamiliarRepository } from "../../domain/repositories/ISaludFamiliarRepository";
import { SaludFamiliar } from "../../domain/entities/SaludFamiliar";

export class InMemorySaludFamiliarRepository
  implements ISaludFamiliarRepository
{
  private saludFamiliares: SaludFamiliar[] = [];

  create(saludFamiliar: SaludFamiliar): Promise<SaludFamiliar> {
    this.saludFamiliares.push(saludFamiliar);
    return Promise.resolve(saludFamiliar);
  }

  readAll(): Promise<SaludFamiliar[]> {
    return Promise.resolve(this.saludFamiliares);
  }

  readById(id: number): Promise<SaludFamiliar> {
    const saludFamiliar = this.saludFamiliares.find((sf) => sf.id === id);
    if (!saludFamiliar) {
      return Promise.reject(new Error(`SaludFamiliar with id ${id} not found`));
    }
    return Promise.resolve(saludFamiliar);
  }

  update(saludFamiliar: SaludFamiliar): Promise<SaludFamiliar> {
    const index = this.saludFamiliares.findIndex(
      (sf) => sf.id === saludFamiliar.id
    );
    if (index === -1) {
      return Promise.reject(
        new Error(`SaludFamiliar with id ${saludFamiliar.id} not found`)
      );
    }
    this.saludFamiliares[index] = saludFamiliar;
    return Promise.resolve(saludFamiliar);
  }

  delete(id: number): Promise<void> {
    const index = this.saludFamiliares.findIndex((sf) => sf.id === id);
    if (index === -1) {
      return Promise.reject(new Error(`SaludFamiliar with id ${id} not found`));
    }
    this.saludFamiliares.splice(index, 1);
    return Promise.resolve();
  }
}

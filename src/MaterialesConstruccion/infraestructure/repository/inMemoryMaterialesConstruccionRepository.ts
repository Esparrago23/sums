import { MaterialesConstruccion } from "../../domain/entities/materialesContruccion";
import { IMaterialesConstruccionRepository } from "../../domain/repository/IMaterialesConstruccionRepository";

export class InMemoryMaterialesConstruccionRepository implements IMaterialesConstruccionRepository {
  private materialesConstruccion: MaterialesConstruccion[] = [];

  create(materialesConstruccion: MaterialesConstruccion): Promise<MaterialesConstruccion> {
    this.materialesConstruccion.push(materialesConstruccion);
    return Promise.resolve(materialesConstruccion);
  }

  update(materialesConstruccion: MaterialesConstruccion): Promise<MaterialesConstruccion> {
    const index = this.materialesConstruccion.findIndex(mc => mc.id === materialesConstruccion.id);
    if (index !== -1) {
      this.materialesConstruccion[index] = materialesConstruccion;
      return Promise.resolve(materialesConstruccion);
    } else {
      return Promise.reject(new Error('Materiales de construcción not found'));
    }
  }

  readById(id: number): Promise<MaterialesConstruccion> {
    const materialesConstruccion = this.materialesConstruccion.find(mc => mc.id === id);
    if (materialesConstruccion) {
      return Promise.resolve(materialesConstruccion);
    } else {
      return Promise.reject(new Error('Materiales de construcción not found'));
    }
  }

  delete(id: number): Promise<void> {
    this.materialesConstruccion = this.materialesConstruccion.filter(mc => mc.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<MaterialesConstruccion[]> {
    return Promise.resolve(this.materialesConstruccion);
  }
}
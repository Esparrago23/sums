import { Educacion } from "../../domain/entities/Educacion";
import { IEducacionRepo } from "../../domain/repositories/IEducacion_repo";

export class InMemoryEducacionRepository implements IEducacionRepo {
  private educaciones: Educacion[] = [];

  create(educacion: Educacion): Promise<Educacion> {
    this.educaciones.push(educacion);
    return Promise.resolve(educacion);
  }

  update(educacion: Educacion): Promise<Educacion> {
    const index = this.educaciones.findIndex((e) => e.id === educacion.id);
    if (index !== -1) {
      this.educaciones[index] = educacion;
      return Promise.resolve(educacion);
    } else {
      return Promise.reject(new Error("Educacion not found"));
    }
  }

  readById(id: number): Promise<Educacion> {
    const educacion = this.educaciones.find((e) => e.id === id);
    if (educacion) {
      return Promise.resolve(educacion);
    } else {
      return Promise.reject(new Error("Educacion not found"));
    }
  }

  delete(id: number): Promise<void> {
    this.educaciones = this.educaciones.filter((e) => e.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<Educacion[]> {
    return Promise.resolve(this.educaciones);
  }
}

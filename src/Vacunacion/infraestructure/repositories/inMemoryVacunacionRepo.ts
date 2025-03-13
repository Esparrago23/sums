import { Vacunacion } from '../../domain/entities/vacunacion';
import { Ivacunacion } from '../../domain/repositories/Ivacunacion';

export class InMemoryVacunacionRepo implements Ivacunacion {
  private vacunaciones: Vacunacion[] = [];

  create(vacunacion: Vacunacion): Promise<Vacunacion> {
    this.vacunaciones.push(vacunacion);
    return Promise.resolve(vacunacion);
  }

  update(vacunacion: Vacunacion): Promise<Vacunacion> {
    const index = this.vacunaciones.findIndex(v => v.id === vacunacion.id);
    if (index !== -1) {
      this.vacunaciones[index] = vacunacion;
      return Promise.resolve(vacunacion);
    } else {
      return Promise.reject(new Error('Vacunación no encontrada'));
    }
  }

  readById(id: number): Promise<Vacunacion> {
    const vacunacion = this.vacunaciones.find(v => v.id === id);
    if (vacunacion) {
      return Promise.resolve(vacunacion);
    } else {
      return Promise.reject(new Error('Vacunación no encontrada'));
    }
  }

  delete(id: number): Promise<void> {
    this.vacunaciones = this.vacunaciones.filter(v => v.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<Vacunacion[]> {
    return Promise.resolve(this.vacunaciones);
  }
}
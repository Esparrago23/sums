import { Direccion } from '../../domain/entities/direccion';
import { IDireccionRepository } from '../../domain/repository/IDireccionRepository';

export class InMemoryDireccionRepository implements IDireccionRepository {
  private direcciones: Direccion[] = [];

  create(direccion: Direccion): Promise<Direccion> {
    this.direcciones.push(direccion);
    return Promise.resolve(direccion);
  }

  update(direccion: Direccion): Promise<Direccion> {
    const index = this.direcciones.findIndex(d => d.id === direccion.id);
    if (index !== -1) {
      this.direcciones[index] = direccion;
      return Promise.resolve(direccion);
    } else {
      return Promise.reject(new Error('Direccion not found'));
    }
  }

  readById(id: number): Promise<Direccion> {
    const direccion = this.direcciones.find(d => d.id === id);
    if (direccion) {
      return Promise.resolve(direccion);
    } else {
      return Promise.reject(new Error('Direccion not found'));
    }
  }

  delete(id: number): Promise<void> {
    this.direcciones = this.direcciones.filter(d => d.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<Direccion[]> {
    return Promise.resolve(this.direcciones);
  }
}
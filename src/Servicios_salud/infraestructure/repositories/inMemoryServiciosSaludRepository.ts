import { ServiciosSalud } from '../../domain/entities/servicios_salud';
import { IServiciosSaludRepository } from '../../domain/repositories/IServiciosSaludRepository';

export class InMemoryServiciosSaludRepository implements IServiciosSaludRepository {
  private serviciosSalud: ServiciosSalud[] = [];

  create(serviciosSalud: ServiciosSalud): Promise<ServiciosSalud> {
    this.serviciosSalud.push(serviciosSalud);
    return Promise.resolve(serviciosSalud);
  }

  update(serviciosSalud: ServiciosSalud): Promise<ServiciosSalud> {
    const index = this.serviciosSalud.findIndex(ss => ss.id === serviciosSalud.id);
    if (index !== -1) {
      this.serviciosSalud[index] = serviciosSalud;
      return Promise.resolve(serviciosSalud);
    } else {
      return Promise.reject(new Error('Servicios de salud not found'));
    }
  }

  readById(id: number): Promise<ServiciosSalud> {
    const serviciosSalud = this.serviciosSalud.find(ss => ss.id === id);
    if (serviciosSalud) {
      return Promise.resolve(serviciosSalud);
    } else {
      return Promise.reject(new Error('Servicios de salud not found'));
    }
  }

  delete(id: number): Promise<void> {
    this.serviciosSalud = this.serviciosSalud.filter(ss => ss.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<ServiciosSalud[]> {
    return Promise.resolve(this.serviciosSalud);
  }
}
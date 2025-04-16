import { ServicioSalud } from '../../domain/entities/servicioSalud';
import { IServicioSaludRepository } from '../../domain/repositories/IServicioSaludRepository';

export class InMemoryServicioSaludRepository implements IServicioSaludRepository {
  private serviciosSalud: ServicioSalud[] = [];

  create(servicioSalud: ServicioSalud): Promise<ServicioSalud> {
    this.serviciosSalud.push(servicioSalud);
    return Promise.resolve(servicioSalud);
  }

  update(servicioSalud: ServicioSalud): Promise<ServicioSalud> {
    const index = this.serviciosSalud.findIndex(ss => ss.id === servicioSalud.id);
    if (index !== -1) {
      this.serviciosSalud[index] = servicioSalud;
      return Promise.resolve(servicioSalud);
    } else {
      return Promise.reject(new Error('Servicio de salud not found'));
    }
  }

  readById(id: number): Promise<ServicioSalud> {
    const servicioSalud = this.serviciosSalud.find(ss => ss.id === id);
    if (servicioSalud) {
      return Promise.resolve(servicioSalud);
    } else {
      return Promise.reject(new Error('Servicio de salud not found'));
    }
  }

  delete(id: number): Promise<void> {
    this.serviciosSalud = this.serviciosSalud.filter(ss => ss.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<ServicioSalud[]> {
    return Promise.resolve(this.serviciosSalud);
  }
}
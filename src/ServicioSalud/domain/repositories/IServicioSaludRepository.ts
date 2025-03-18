import { ServicioSalud } from "../entities/ServicioSalud";

export interface IServicioSaludRepository {
  create(servicioSalud: ServicioSalud): Promise<ServicioSalud>;
  readAll(): Promise<ServicioSalud[]>;
  readById(id: number): Promise<ServicioSalud>;
  update(servicioSalud: ServicioSalud): Promise<ServicioSalud>;
  delete(id: number): Promise<void>;
}

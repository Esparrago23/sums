import { ServiciosSalud } from "../entities/servicios_salud";

export interface IServiciosSaludRepository {
  create(serviciosSalud: ServiciosSalud): Promise<ServiciosSalud>;
  readAll(): Promise<ServiciosSalud[]>;
  readById(id: number): Promise<ServiciosSalud>;
  update(serviciosSalud: ServiciosSalud): Promise<ServiciosSalud>;
  delete(id: number): Promise<void>;
}
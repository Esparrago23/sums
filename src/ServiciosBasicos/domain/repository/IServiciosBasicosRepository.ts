import { ServiciosBasicos } from "../entities/serviciosBasicos";

export interface IServiciosBasicosRepository {
  create(serviciosBasicos: ServiciosBasicos): Promise<ServiciosBasicos>;
  readAll(): Promise<ServiciosBasicos[]>;
  readById(id: number): Promise<ServiciosBasicos>;
  update(serviciosBasicos: ServiciosBasicos): Promise<ServiciosBasicos>;
  delete(id: number): Promise<void>;
}
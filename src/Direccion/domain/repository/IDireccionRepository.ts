import { Direccion} from "../entities/direccion";
export interface IDireccionRepository {
  create(direccion: Direccion): Promise<Direccion>;
  readAll(): Promise<Direccion[]>;
  readById(id: number): Promise<Direccion>;
  update(direccion: Direccion): Promise<Direccion>;
  delete(id: number): Promise<void>;
}
import { Educacion } from "../entities/Educacion";

export interface IEducacionRepo {
  create(educacion: Educacion): Promise<Educacion>;
  readAll(): Promise<Educacion[]>;
  readById(id: number): Promise<Educacion>;
  update(educacion: Educacion): Promise<Educacion>;
  delete(id: number): Promise<void>;
}
import { Vacunacion } from "../entities/vacunacion";

export interface Ivacunacion {
  create(vacunacion: Vacunacion): Promise<Vacunacion>;
  readAll(): Promise<Vacunacion[]>;
  readById(id: number): Promise<Vacunacion>;
  update(vacunacion: Vacunacion): Promise<Vacunacion>;
  delete(id: number): Promise<void>;
}

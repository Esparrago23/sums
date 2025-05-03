import { Vacunacion } from "../entities/vacunacion";
import {VacunaDosisAplicacionDTO} from "../entities/consultas";
export interface Ivacunacion {
  create(vacunacion: Vacunacion): Promise<Vacunacion>;
  readAll(): Promise<Vacunacion[]>;
  readById(id: number): Promise<Vacunacion>;
  update(vacunacion: Vacunacion): Promise<Vacunacion>;
  delete(id: number): Promise<void>;
  
}

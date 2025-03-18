import { MaterialesConstruccion } from "../entities/materialesContruccion";

export interface IMaterialesConstruccionRepository {
  create(materialesConstruccion: MaterialesConstruccion): Promise<MaterialesConstruccion>;
  readAll(): Promise<MaterialesConstruccion[]>;
  readById(id: number): Promise<MaterialesConstruccion>;
  update(materialesConstruccion: MaterialesConstruccion): Promise<MaterialesConstruccion>;
  delete(id: number): Promise<void>;
}
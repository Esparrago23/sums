import { MaterialesVivienda } from "../entities/materialesVivienda";

export interface IMaterialesViviendaRepository {
  create(materialesConstruccion: MaterialesVivienda): Promise<MaterialesVivienda>;
  readAll(): Promise<MaterialesVivienda[]>;
  readById(id: number): Promise<MaterialesVivienda>;
  update(materialesConstruccion: MaterialesVivienda): Promise<MaterialesVivienda>;
  delete(id: number): Promise<void>;
}
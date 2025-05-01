import { MaterialesVivienda } from "../entities/materialesVivienda";

export interface IMaterialesViviendaRepository {
  create(materialesVivienda: MaterialesVivienda): Promise<MaterialesVivienda>;
  readAll(): Promise<MaterialesVivienda[]>;
  readById(id: number): Promise<MaterialesVivienda>;
  update(materialesVivienda: MaterialesVivienda): Promise<MaterialesVivienda>;
  delete(id: number): Promise<void>;
}
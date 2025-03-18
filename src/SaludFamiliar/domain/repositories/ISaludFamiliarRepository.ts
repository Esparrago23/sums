import { SaludFamiliar } from "../entities/SaludFamiliar";

export interface ISaludFamiliarRepository {
  create(saludFamiliar: SaludFamiliar): Promise<SaludFamiliar>;
  readAll(): Promise<SaludFamiliar[]>;
  readById(id: number): Promise<SaludFamiliar>;
  update(saludFamiliar: SaludFamiliar): Promise<SaludFamiliar>;
  delete(id: number): Promise<void>;
}

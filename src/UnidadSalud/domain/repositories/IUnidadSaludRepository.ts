import { UnidadSalud } from "../entities/UnidadSalud";

export interface IUnidadSaludRepository {
  create(unidadSalud: UnidadSalud): Promise<UnidadSalud>;
  readAll(): Promise<UnidadSalud[]>;
  readById(id: number): Promise<UnidadSalud>;
  update(unidadSalud: UnidadSalud): Promise<UnidadSalud>;
  delete(id: number): Promise<void>;
}

import { EstiloVida } from "../entities/estiloVida";

export interface IEstiloVidaRepository {
  create(estiloVida: EstiloVida): Promise<EstiloVida>;
  readAll(): Promise<EstiloVida[]>;
  readById(id: number): Promise<EstiloVida>;
  update(estiloVida: EstiloVida): Promise<EstiloVida>;
  delete(id: number): Promise<void>;
}
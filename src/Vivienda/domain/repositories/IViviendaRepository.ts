import { Vivienda } from "../entities/vivienda";

export interface IViviendaRepository {
    create(vivienda: Vivienda): Promise<Vivienda>;
    readAll(): Promise<Vivienda[]>;
    readById(id: number): Promise<Vivienda>;
    update(vivienda: Vivienda): Promise<Vivienda>;
    delete(id: number): Promise<void>;
}

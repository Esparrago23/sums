import { Familia } from "../entities/familia";

export interface IFamiliaRepository {
    create(familia: Familia): Promise<Familia>;
    readAll(): Promise<Familia[]>;
    readById(id: number): Promise<Familia>;
    update(familia: Familia): Promise<Familia>;
    delete(id: number): Promise<void>;
}
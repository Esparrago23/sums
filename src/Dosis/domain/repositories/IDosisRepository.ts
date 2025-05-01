import { Dosis } from "../entities/Dosis";

export interface IDosisRepository {
    create(dosis: Dosis): Promise<Dosis>;
    readAll(): Promise<Dosis[]>;
    readById(id: number): Promise<Dosis>;
    update(dosis: Dosis): Promise<Dosis>;
    delete(id: number): Promise<void>;
}
import { Cedula } from "../entities/cedula";

export interface ICedulaRepository {
    create(cedula: Cedula): Promise<Cedula>;
    readAll(): Promise<Cedula[]>;
    readById(id: number): Promise<Cedula>;
    update(cedula: Cedula): Promise<Cedula>;
    delete(id: number): Promise<void>;
}
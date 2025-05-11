import {  Rol } from "../entities/entrevistador";

export interface IRolRepository {
    create(rol: Rol): Promise<Rol>;
    readAll(): Promise<Rol[]>;
    readById(id: number): Promise<Rol | null>;
    update(rol: Rol): Promise<Rol>;
    delete(id: number): Promise<void>;
}

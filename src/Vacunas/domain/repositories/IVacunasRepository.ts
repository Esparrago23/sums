import { Vacunas } from "../entities/Vacunas";

export interface IVacunasRepository {
    create(vacunas: Vacunas): Promise<Vacunas>;
    readAll(): Promise<Vacunas[]>;
    readById(id: number): Promise<Vacunas>;
    update(vacunas: Vacunas): Promise<Vacunas>;
    delete(id: number): Promise<void>;
}
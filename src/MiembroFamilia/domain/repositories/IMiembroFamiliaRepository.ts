import { MiembroFamilia } from "../entities/miembroFamilia";

export interface IMiembroFamiliaRepository {
    create(miembroFamilia: MiembroFamilia): Promise<MiembroFamilia>;
    readAll(): Promise<MiembroFamilia[]>;
    readById(id: number): Promise<MiembroFamilia>;
    update(miembroFamilia: MiembroFamilia): Promise<MiembroFamilia>;
    delete(id: number): Promise<void>;
}
import { DatosLaborales } from "../entities/datosLaborales";

export interface IDatosLaboralesRepository {
    create(datosLaborales: DatosLaborales): Promise<DatosLaborales>;
    readAll(): Promise<DatosLaborales[]>;
    readById(id: number): Promise<DatosLaborales>;
    update(datosLaborales: DatosLaborales): Promise<DatosLaborales>;
    delete(id: number): Promise<void>;
}

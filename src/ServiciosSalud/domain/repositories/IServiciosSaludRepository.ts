import {ServicioSalud} from "../entities/serviciosSalud";
import {Visita} from "../entities/serviciosSalud";
export interface IServicioSaludRepository {
    create(servicioSalud: ServicioSalud): Promise<ServicioSalud>;
    readAll(): Promise<ServicioSalud[]>;
    readById(id: number): Promise<ServicioSalud>;
    update(servicioSalud: ServicioSalud): Promise<ServicioSalud>;
    delete(id: number): Promise<void>;

    agregarVisita(servicioId: number, visita: Visita): Promise<ServicioSalud>;
    eliminarVisita(servicioId: number, fecha: string): Promise<ServicioSalud>;
    obtenerVisitasPorTipo(servicioId: number, tipo: string): Promise<Visita[]>;
    obtenerUltimaVisita(servicioId: number): Promise<Visita | null>;
}
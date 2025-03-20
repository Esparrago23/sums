import { ConvivenciaAnimales} from "../entities/ConvivenciaAnimales";

export interface IConvivenciaAnimalesRepository {
    create(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales>
    readAll(): Promise<ConvivenciaAnimales[]>
    readById(id: number): Promise<ConvivenciaAnimales>
    update(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales>
    delete(id: number): Promise<void>
}
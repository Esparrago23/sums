import { DatosLaborales } from '../../domain/entities/datosLaborales';
import { IDatosLaboralesRepository } from '../../domain/repositories/IDatosLaboralesRepository';

export class InMemoryDatosLaboralesRepository implements IDatosLaboralesRepository {
    private datosLaborales: DatosLaborales[] = [];

    create(datosLaborales: DatosLaborales): Promise<DatosLaborales> {
        this.datosLaborales.push(datosLaborales);
        return Promise.resolve(datosLaborales);
    }

    update(datosLaborales: DatosLaborales): Promise<DatosLaborales> {
        const index = this.datosLaborales.findIndex(dl => dl.id === datosLaborales.id);
        if (index !== -1) {
            this.datosLaborales[index] = datosLaborales;
            return Promise.resolve(datosLaborales);
        } else {
            return Promise.reject(new Error('Datos laborales not found'));
        }
    }

    readById(id: number): Promise<DatosLaborales> {
        const datosLaborales = this.datosLaborales.find(dl => dl.id === id);
        if (datosLaborales) {
            return Promise.resolve(datosLaborales);
        } else {
            return Promise.reject(new Error('Datos laborales not found'));
        }
    }

    delete(id: number): Promise<void> {
        this.datosLaborales = this.datosLaborales.filter(dl => dl.id !== id);
        return Promise.resolve();
    }

    readAll(): Promise<DatosLaborales[]> {
        return Promise.resolve(this.datosLaborales);
    }
}
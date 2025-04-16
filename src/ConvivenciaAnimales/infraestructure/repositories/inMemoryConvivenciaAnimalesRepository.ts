import { ConvivenciaAnimales } from '../../domain/entities/convivenciaAnimales';
import { IConvivenciaAnimalesRepository } from '../../domain/repositories/IConvivenciaAnimalesRepository';

export class InMemoryConvivenciaAnimalesRepository implements IConvivenciaAnimalesRepository {
    private convivenciaAnimalesList: ConvivenciaAnimales[] = [];

    create(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales> {
        this.convivenciaAnimalesList.push(convivenciaAnimales);
        return Promise.resolve(convivenciaAnimales);
    }

    update(convivenciaAnimales: ConvivenciaAnimales): Promise<ConvivenciaAnimales> {
        const index = this.convivenciaAnimalesList.findIndex(c => c.id === convivenciaAnimales.id);
        if (index !== -1) {
            this.convivenciaAnimalesList[index] = convivenciaAnimales;
            return Promise.resolve(convivenciaAnimales);
        } else {
            return Promise.reject(new Error('Convivencia animales not found'));
        }
    }

    readById(id: number): Promise<ConvivenciaAnimales> {
        const convivenciaAnimales = this.convivenciaAnimalesList.find(c => c.id === id);
        if (convivenciaAnimales) {
            return Promise.resolve(convivenciaAnimales);
        } else {
            return Promise.reject(new Error('Convivencia animales not found'));
        }
    }

    delete(id: number): Promise<void> {
        this.convivenciaAnimalesList = this.convivenciaAnimalesList.filter(c => c.id !== id);
        return Promise.resolve();
    }

    readAll(): Promise<ConvivenciaAnimales[]> {
        return Promise.resolve(this.convivenciaAnimalesList);
    }
}
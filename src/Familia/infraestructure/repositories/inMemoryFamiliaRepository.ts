import { Familia } from '../../domain/entities/familia';
import { IFamiliaRepository } from '../../domain/repositories/IFamiliaRepository';

export class InMemoryFamiliaRepository implements IFamiliaRepository {
    private familias: Familia[] = [];

    create(familia: Familia): Promise<Familia> {
        this.familias.push(familia);
        return Promise.resolve(familia);
    }

    update(familia: Familia): Promise<Familia> {
        const index = this.familias.findIndex(f => f.id === familia.id);
        if (index !== -1) {
            this.familias[index] = familia;
            return Promise.resolve(familia);
        } else {
            return Promise.reject(new Error('Familia not found'));
        }
    }

    readById(id: number): Promise<Familia> {
        const familia = this.familias.find(f => f.id === id);
        if (familia) {
            return Promise.resolve(familia);
        } else {
            return Promise.reject(new Error('Familia not found'));
        }
    }

    delete(id: number): Promise<void> {
        this.familias = this.familias.filter(f => f.id !== id);
        return Promise.resolve();
    }

    readAll(): Promise<Familia[]> {
        return Promise.resolve(this.familias);
    }
}
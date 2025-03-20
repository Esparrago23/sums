import { Cedula } from '../../domain/entities/cedula';
import { ICedulaRepository } from '../../domain/repositories/ICedulaRepository';

export class InMemoryCedulaRepository implements ICedulaRepository {
    private cedulas: Cedula[] = [];

    create(cedula: Cedula): Promise<Cedula> {
        this.cedulas.push(cedula);
        return Promise.resolve(cedula);
    }

    update(cedula: Cedula): Promise<Cedula> {
        const index = this.cedulas.findIndex(c => c.id === cedula.id);
        if (index !== -1) {
            this.cedulas[index] = cedula;
            return Promise.resolve(cedula);
        } else {
            return Promise.reject(new Error('Cedula not found'));
        }
    }

    readById(id: number): Promise<Cedula> {
        const cedula = this.cedulas.find(c => c.id === id);
        if (cedula) {
            return Promise.resolve(cedula);
        } else {
            return Promise.reject(new Error('Cedula not found'));
        }
    }

    delete(id: number): Promise<void> {
        this.cedulas = this.cedulas.filter(c => c.id !== id);
        return Promise.resolve();
    }

    readAll(): Promise<Cedula[]> {
        return Promise.resolve(this.cedulas);
    }
}
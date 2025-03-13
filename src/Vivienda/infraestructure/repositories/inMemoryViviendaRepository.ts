import { Vivienda } from '../../domain/entities/Vivienda';
import { IViviendaRepository } from '../../domain/repositories/IViviendaRepository';

export class InMemoryViviendaRepository implements IViviendaRepository {
    private viviendas: Vivienda[] = [];

    create(vivienda: Vivienda): Promise<Vivienda> {
        this.viviendas.push(vivienda);
        return Promise.resolve(vivienda);
    }

    update(vivienda: Vivienda): Promise<Vivienda> {
        const index = this.viviendas.findIndex(v => v.id === vivienda.id);
        if (index !== -1) {
            this.viviendas[index] = vivienda;
            return Promise.resolve(vivienda);
        } else {
            return Promise.reject(new Error('Vivienda not found'));
        }
    }

    readById(id: number): Promise<Vivienda> {
        const vivienda = this.viviendas.find(v => v.id === id);
        if (vivienda) {
            return Promise.resolve(vivienda);
        } else {
            return Promise.reject(new Error('Vivienda not found'));
        }
    }

    delete(id: number): Promise<void> {
        this.viviendas = this.viviendas.filter(v => v.id !== id);
        return Promise.resolve();
    }

    readAll(): Promise<Vivienda[]> {
        return Promise.resolve(this.viviendas);
    }
}
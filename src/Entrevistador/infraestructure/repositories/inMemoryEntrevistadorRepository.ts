import { Entrevistador } from '../../domain/entities/entrevistador';
import { IEntrevistadorRepository } from '../../domain/repositories/IEntrevistadorRepository';

export class InMemoryEntrevistadorRepository implements IEntrevistadorRepository {
    private entrevistadores: Entrevistador[] = [];

    create(entrevistador: Entrevistador): Promise<Entrevistador> {
        this.entrevistadores.push(entrevistador);
        return Promise.resolve(entrevistador);
    }

    readAll(): Promise<Entrevistador[]> {
        return Promise.resolve(this.entrevistadores);
    }

    readById(id: number): Promise<Entrevistador | null> {
        return Promise.resolve(this.entrevistadores.find(e => e.id === id) || null);
    }

    update(entrevistador: Entrevistador): Promise<Entrevistador> {
        const index = this.entrevistadores.findIndex(e => e.id === entrevistador.id);
        if (index === -1) return Promise.reject(new Error('Entrevistador not found'));

        this.entrevistadores[index] = entrevistador;
        return Promise.resolve(entrevistador);
    }

    delete(id: number): Promise<void> {
        this.entrevistadores = this.entrevistadores.filter(e => e.id !== id);
        return Promise.resolve();
    }
}

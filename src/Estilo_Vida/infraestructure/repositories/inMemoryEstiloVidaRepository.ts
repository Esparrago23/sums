import { EstiloVida } from '../../domain/entities/estiloVida';
import { IEstiloVidaRepository } from '../../domain/repositories/IEstiloVidaRepository';

export class InMemoryEstiloVidaRepository implements IEstiloVidaRepository {
  private estilosVida: EstiloVida[] = [];

  create(estiloVida: EstiloVida): Promise<EstiloVida> {
    this.estilosVida.push(estiloVida);
    return Promise.resolve(estiloVida);
  }

  update(estiloVida: EstiloVida): Promise<EstiloVida> {
    const index = this.estilosVida.findIndex(ev => ev.id === estiloVida.id);
    if (index !== -1) {
      this.estilosVida[index] = estiloVida;
      return Promise.resolve(estiloVida);
    } else {
      return Promise.reject(new Error('Estilo de vida not found'));
    }
  }

  readById(id: number): Promise<EstiloVida> {
    const estiloVida = this.estilosVida.find(ev => ev.id === id);
    if (estiloVida) {
      return Promise.resolve(estiloVida);
    } else {
      return Promise.reject(new Error('Estilo de vida not found'));
    }
  }

  delete(id: number): Promise<void> {
    this.estilosVida = this.estilosVida.filter(ev => ev.id !== id);
    return Promise.resolve();
  }

  readAll(): Promise<EstiloVida[]> {
    return Promise.resolve(this.estilosVida);
  }
}
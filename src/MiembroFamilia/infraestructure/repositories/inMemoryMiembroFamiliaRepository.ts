import { MiembroFamilia } from '../../domain/entities/miembroFamilia';
import { IMiembroFamiliaRepository } from '../../domain/repositories/IMiembroFamiliaRepository';

export class InMemoryMiembroFamiliaRepository implements IMiembroFamiliaRepository {
    private miembrosFamilia: MiembroFamilia[] = [];

    create(miembroFamilia: MiembroFamilia): Promise<MiembroFamilia> {
        this.miembrosFamilia.push(miembroFamilia);
        return Promise.resolve(miembroFamilia);
    }

    update(miembroFamilia: MiembroFamilia): Promise<MiembroFamilia> {
        const index = this.miembrosFamilia.findIndex(mf => mf.id === miembroFamilia.id);
        if (index !== -1) {
            this.miembrosFamilia[index] = miembroFamilia;
            return Promise.resolve(miembroFamilia);
        } else {
            return Promise.reject(new Error('Miembro de familia not found'));
        }
    }

    readById(id: number): Promise<MiembroFamilia> {
        const miembroFamilia = this.miembrosFamilia.find(mf => mf.id === id);
        if (miembroFamilia) {
            return Promise.resolve(miembroFamilia);
        } else {
            return Promise.reject(new Error('Miembro de familia not found'));
        }
    }

    delete(id: number): Promise<void> {
        this.miembrosFamilia = this.miembrosFamilia.filter(mf => mf.id !== id);
        return Promise.resolve();
    }

    readAll(): Promise<MiembroFamilia[]> {
        return Promise.resolve(this.miembrosFamilia);
    }
}
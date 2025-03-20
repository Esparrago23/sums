import { UnidadSalud } from "../domain/entities/UnidadSalud";
import { IUnidadSaludRepository } from "../domain/repositories/IUnidadSaludRepository";

export class UpdateUnidadSaludUseCase {
  constructor(private unidadSaludRepository: IUnidadSaludRepository) {}

  async execute(
    id: number,
    unidadSaludData: Partial<UnidadSalud>
  ): Promise<UnidadSalud | null> {
    const unidadSalud = await this.unidadSaludRepository.readById(id);
    if (!unidadSalud) {
      return null;
    }

    const updatedUnidadSalud = { ...unidadSalud, ...unidadSaludData };
    return this.unidadSaludRepository.update(updatedUnidadSalud);
  }
}

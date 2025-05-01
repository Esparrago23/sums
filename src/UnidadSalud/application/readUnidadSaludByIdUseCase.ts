import { UnidadSalud } from "../domain/entities/UnidadSalud";
import { IUnidadSaludRepository } from "../domain/repositories/IUnidadSaludRepository";

export class ReadUnidadSaludByIdUseCase {
  constructor(private unidadSaludRepository: IUnidadSaludRepository) {}

  async execute(id: number): Promise<UnidadSalud | null> {
    return this.unidadSaludRepository.readById(id);
  }
}

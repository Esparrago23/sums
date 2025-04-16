import { UnidadSalud } from "../domain/entities/UnidadSalud";
import { IUnidadSaludRepository } from "../domain/repositories/IUnidadSaludRepository";

export class CreateUnidadSaludUseCase {
  constructor(private unidadSaludRepository: IUnidadSaludRepository) {}

  async execute(unidadSalud: UnidadSalud): Promise<UnidadSalud> {
    return this.unidadSaludRepository.create(unidadSalud);
  }
}

import { UnidadSalud } from "../domain/entities/UnidadSalud";
import { IUnidadSaludRepository } from "../domain/repositories/IUnidadSaludRepository";

export class ReadAllUnidadSaludUseCase {
  constructor(private unidadSaludRepository: IUnidadSaludRepository) {}

  async execute(): Promise<UnidadSalud[]> {
    return this.unidadSaludRepository.readAll();
  }
}

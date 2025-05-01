import { IUnidadSaludRepository } from "../domain/repositories/IUnidadSaludRepository";

export class DeleteUnidadSaludUseCase {
  constructor(private unidadSaludRepository: IUnidadSaludRepository) {}

  async execute(id: number): Promise<void> {
    await this.unidadSaludRepository.delete(id);
  }
}

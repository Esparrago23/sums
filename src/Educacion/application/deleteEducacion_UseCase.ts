import { IEducacionRepo } from "../domain/repositories/IEducacion_repo";

export class DeleteEducacionUseCase {
  constructor(private educacionRepository: IEducacionRepo) {}

  async execute(id: number): Promise<void> {
    await this.educacionRepository.delete(id);
  }
}

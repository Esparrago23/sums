import { Educacion } from "../domain/entities/Educacion";
import { IEducacionRepo } from "../domain/repositories/IEducacion_repo";

export class ReadEducacionByIdUseCase {
  constructor(private educacionRepository: IEducacionRepo) {}

  async execute(id: number): Promise<Educacion | null> {
    return this.educacionRepository.readById(id);
  }
}

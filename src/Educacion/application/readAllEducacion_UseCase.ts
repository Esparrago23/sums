import { Educacion } from "../domain/entities/Educacion";
import { IEducacionRepo } from "../domain/repositories/IEducacion_repo";

export class ReadAllEducacionUseCase {
  constructor(private educacionRepository: IEducacionRepo) {}

  async execute(): Promise<Educacion[]> {
    return this.educacionRepository.readAll();
  }
}

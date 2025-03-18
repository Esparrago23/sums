import { Educacion } from "../domain/entities/Educacion";
import { IEducacionRepo } from "../domain/repositories/IEducacion_repo";

export class CreateEducacionUseCase {
  constructor(private educacionRepository: IEducacionRepo) {}

  async execute(educacion: Educacion): Promise<Educacion> {
    return this.educacionRepository.create(educacion);
  }
}

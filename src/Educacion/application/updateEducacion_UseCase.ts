import { Educacion } from "../domain/entities/Educacion";
import { IEducacionRepo } from "../domain/repositories/IEducacion_repo";

export class UpdateEducacionUseCase {
  constructor(private educacionRepository: IEducacionRepo) {}

  async execute(id: number, educacionData: Partial<Educacion>): Promise<Educacion | null> {
    const educacion = await this.educacionRepository.readById(id);
    if (!educacion) {
      return null;
    }

    const updatedEducacion = { ...educacion, ...educacionData };
    return this.educacionRepository.update(updatedEducacion);
  }
}
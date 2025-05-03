import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { VacunacionPorSexoDTO } from "../domain/entities/consultas";
// 5. Vacunación segmentada por sexo

export class GetVacunacionPorSexoUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(): Promise<VacunacionPorSexoDTO[]> {
    return this.vacunacionRepository.getVacunacionPorSexo();
  }
}
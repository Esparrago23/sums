import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { VacunacionPorRangoEdadDTO } from "../domain/entities/consultas";
// 6. Vacunación por rangos de edad

export class GetVacunacionPorRangoEdadUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(): Promise<VacunacionPorRangoEdadDTO[]> {
    return this.vacunacionRepository.getVacunacionPorRangoEdad();
  }
}
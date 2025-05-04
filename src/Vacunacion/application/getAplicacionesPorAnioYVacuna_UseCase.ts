import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { AplicacionesPorAnioVacunaDTO } from "../domain/entities/consultas";
// 4. Aplicaciones por año y tipo de vacuna

export class GetAplicacionesPorAnioVacunaUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(): Promise<AplicacionesPorAnioVacunaDTO[]> {
    return this.vacunacionRepository.getAplicacionesPorAnioYVacuna();
  }
}
import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { DosisPorPersonaDTO } from "../domain/entities/consultas";
// 7. Total de dosis aplicadas por persona (resumen individual)

export class GetDosisAplicadasPorPersonaUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(): Promise<DosisPorPersonaDTO[]> {
    return this.vacunacionRepository.getDosisAplicadasPorPersona();
  }
}
import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { VacunaDosisAplicacionDTO } from "../domain/entities/consultas";
// 2. Total de aplicaciones por vacuna y tipo de dosis para una persona específica

export class GetVacunaDosisAplicacionPorPersonaUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(personaId: number): Promise<VacunaDosisAplicacionDTO[]> {
    return this.vacunacionRepository.getAplicacionesPorPersona(personaId);
  }
}
import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { VacunaDosisAplicacionDTO } from "../domain/entities/consultas";
// 1. Total de aplicaciones por vacuna y tipo de dosis
export class GetVacunaDosisAplicacionUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(): Promise<VacunaDosisAplicacionDTO[]> {
    return this.vacunacionRepository.getAplicacionesPorVacunaYDosis();
  }
}
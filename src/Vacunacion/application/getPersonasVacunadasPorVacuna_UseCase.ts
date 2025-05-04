import { Ivacunacion } from "../domain/repositories/Ivacunacion";
import { PersonasVacunadasPorVacunaDTO } from "../domain/entities/consultas";
// 3. Número de personas vacunadas por cada vacuna

export class GetPersonasVacunadasPorVacunaUseCase {
  constructor(private vacunacionRepository: Ivacunacion) {}

  async execute(): Promise<PersonasVacunadasPorVacunaDTO[]> {
    return this.vacunacionRepository.getPersonasVacunadasPorVacuna();
  }
}
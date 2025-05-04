import { Vacunacion } from "../entities/vacunacion";
import {VacunaDosisAplicacionDTO, VacunacionPorRangoEdadDTO,VacunacionPorSexoDTO,PersonasVacunadasPorVacunaDTO,AplicacionesPorAnioVacunaDTO,DosisPorPersonaDTO} from "../entities/consultas";
export interface Ivacunacion {
  create(vacunacion: Vacunacion): Promise<Vacunacion>;
  readAll(): Promise<Vacunacion[]>;
  readById(id: number): Promise<Vacunacion>;
  update(vacunacion: Vacunacion): Promise<Vacunacion>;
  delete(id: number): Promise<void>;
  // 1. Total de aplicaciones por vacuna y tipo de dosis
getAplicacionesPorVacunaYDosis(): Promise<VacunaDosisAplicacionDTO[]>;

// 2. Total de aplicaciones por vacuna y tipo de dosis para una persona específica
getAplicacionesPorPersona(personaId: number): Promise<VacunaDosisAplicacionDTO[]>;

// 3. Número de personas vacunadas por cada vacuna
getPersonasVacunadasPorVacuna(): Promise<PersonasVacunadasPorVacunaDTO[]>;

// 4. Aplicaciones por año y tipo de vacuna
getAplicacionesPorAnioYVacuna(): Promise<AplicacionesPorAnioVacunaDTO[]>;

// 5. Vacunación segmentada por sexo
getVacunacionPorSexo(): Promise<VacunacionPorSexoDTO[]>;

// 6. Vacunación por rangos de edad
getVacunacionPorRangoEdad(): Promise<VacunacionPorRangoEdadDTO[]>;

// 7. Total de dosis aplicadas por persona (resumen individual)
getDosisAplicadasPorPersona(): Promise<DosisPorPersonaDTO[]>;
}


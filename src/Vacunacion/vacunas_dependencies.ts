import { InMemoryVacunacionRepo } from "./infraestructure/repositories/inMemoryVacunacionRepo";

import { CreateVacunacionUseCase } from "./application/createVacunacion_UseCase";
import { ReadAllVacunacion } from "./application/readAllVacunacion_UseCase";
import { ReadByIdVacunacionUseCase } from "./application/readByIdVacunacion_UseCase";
import { DeleteVacunacionUseCase } from "./application/deleteVacunacion_UseCase";
import { UpdateVacunacionUseCase } from "./application/updateVacunacion_UseCase";

import { GetVacunaDosisAplicacionUseCase } from "./application/getAplicacionesPorVacunaYDosis_UseCase";//1
import {GetVacunaDosisAplicacionPorPersonaUseCase} from "./application/getAplicacionesPorPersona_UseCase";//2
import { GetPersonasVacunadasPorVacunaUseCase } from "./application/getPersonasVacunadasPorVacuna_UseCase";//3
import { GetAplicacionesPorAnioVacunaUseCase } from "./application/getAplicacionesPorAnioYVacuna_UseCase";//4
import { GetVacunacionPorSexoUseCase } from "./application/getVacunacionPorSexo_UseCase";//5
import { GetVacunacionPorRangoEdadUseCase } from "./application/getVacunacionPorRangoEdad_UseCase";//6
import { GetDosisAplicadasPorPersonaUseCase } from "./application/getDosisAplicadasPorPersona_UseCase";//7

import { CreateVacunacion_Controller } from "./infraestructure/controller/createVacunacion_Controller";
import { ReadAllVacunacion_Controller } from "./infraestructure/controller/readAllVacunacion_Controller";
import { ReadById_Controller } from "./infraestructure/controller/readIdVacunacion_Controller";
import { DeleteVacunacionController } from "./infraestructure/controller/deleteVacunacion_Controller";
import { UpdateVacunacion_Controller } from "./infraestructure/controller/updateVacunacion_Controller";

import { GetAplicacionesPorAnioVacuna_Controller } from "./infraestructure/controller/getAplicacionesPorAnioVacuna_Controller";//4
import { GetVacunaDosisAplicacion_Controller } from "./infraestructure/controller/getVacunaDosisAplicacion_Controller";//1
import { GetPersonasVacunadasPorVacuna_Controller } from "./infraestructure/controller/getPersonasVacunadasPorVacuna_Controller";//3
import { GetVacunacionPorRangoEdad_Controller } from "./infraestructure/controller/getVacunacionPorRangoEdad_Controller";//6
import { GetVacunacionPorSexo_Controller } from "./infraestructure/controller/getVacunacionPorSexo_Controller";//5
import { GetVacunaDosisAplicacionPorPersona_Controller } from "./infraestructure/controller/getVacunaDosisAplicacionPorPersona_Controller";
import { GetDosisAplicadasPorPersona_Controller } from "./infraestructure/controller/getDosisAplicadasPorPersona_Controller";//7



export const vacunasRepository = new InMemoryVacunacionRepo();

export const createVacunasUseCase = new CreateVacunacionUseCase(vacunasRepository);
export const readAllVacunasUseCase = new ReadAllVacunacion(vacunasRepository);
export const deleteVacunasUseCase = new DeleteVacunacionUseCase(vacunasRepository);
export const readVacunasByIdUseCase = new ReadByIdVacunacionUseCase(vacunasRepository);
export const updateVacunasUseCase = new UpdateVacunacionUseCase(vacunasRepository);

export const getAplicacionesPorAnioVacunaUseCase = new GetAplicacionesPorAnioVacunaUseCase(vacunasRepository);//4
export const getAplicacionesPorVacunaYDosisUseCase = new GetVacunaDosisAplicacionUseCase(vacunasRepository);//1
export const getPersonasVacunadasPorVacunaUseCase = new GetPersonasVacunadasPorVacunaUseCase(vacunasRepository);//3
export const getVacunacionPorRangoEdadUseCase = new GetVacunacionPorRangoEdadUseCase(vacunasRepository);//6
export const getVacunacionPorSexoUseCase = new GetVacunacionPorSexoUseCase(vacunasRepository);//5
export const getVacunacionPorVacunaUseCase = new GetVacunaDosisAplicacionPorPersonaUseCase(vacunasRepository);//2
export const getDosisAplicadasPorPersonaUseCase = new GetDosisAplicadasPorPersonaUseCase(vacunasRepository);//7

export const createVacunasController = new CreateVacunacion_Controller(createVacunasUseCase);
export const readAllVacunasController = new ReadAllVacunacion_Controller(readAllVacunasUseCase);
export const deleteVacunasController = new DeleteVacunacionController(deleteVacunasUseCase);
export const readVacunasByIdController = new ReadById_Controller(readVacunasByIdUseCase);
export const updateVacunasController = new UpdateVacunacion_Controller(updateVacunasUseCase);

export const getAplicacionesPorAnioVacunaController = new GetAplicacionesPorAnioVacuna_Controller(getAplicacionesPorAnioVacunaUseCase);//4
export const getAplicacionesPorVacunaYDosisController = new GetVacunaDosisAplicacion_Controller(getAplicacionesPorVacunaYDosisUseCase);//1
export const getPersonasVacunadasPorVacunaController = new GetPersonasVacunadasPorVacuna_Controller(getPersonasVacunadasPorVacunaUseCase);//3
export const getVacunacionPorRangoEdadController = new GetVacunacionPorRangoEdad_Controller(getVacunacionPorRangoEdadUseCase);//6
export const getVacunacionPorSexoController = new GetVacunacionPorSexo_Controller(getVacunacionPorSexoUseCase);//5
export const getVacunacionPorVacunaController = new GetVacunaDosisAplicacionPorPersona_Controller(getVacunacionPorVacunaUseCase);//2
export const getDosisAplicadasPorPersonaController = new GetDosisAplicadasPorPersona_Controller(getDosisAplicadasPorPersonaUseCase);//7
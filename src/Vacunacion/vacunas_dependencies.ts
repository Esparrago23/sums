import { InMemoryVacunacionRepo } from "./infraestructure/repositories/inMemoryVacunacionRepo";

import { CreateVacunacionUseCase } from "./application/createVacunacion_UseCase";
import { ReadAllVacunacion } from "./application/readAllVacunacion_UseCase";
import { ReadByIdVacunacionUseCase } from "./application/readByIdVacunacion_UseCase";
import { DeleteVacunacionUseCase } from "./application/deleteVacunacion_UseCase";
import { UpdateVacunacionUseCase } from "./application/updateVacunacion_UseCase";

import { CreateVacunacion_Controller } from "./infraestructure/controller/createVacunacion_Controller";
import { ReadAllVacunacion_Controller } from "./infraestructure/controller/readAllVacunacion_Controller";
import { ReadById_Controller } from "./infraestructure/controller/readIdVacunacion_Controller";
import { DeleteVacunacionController } from "./infraestructure/controller/deleteVacunacion_Controller";
import { UpdateVacunacion_Controller } from "./infraestructure/controller/updateVacunacion_Controller";
export const vacunasRepository = new InMemoryVacunacionRepo();

export const createVacunasUseCase = new CreateVacunacionUseCase(vacunasRepository);
export const readAllVacunasUseCase = new ReadAllVacunacion(vacunasRepository);
export const deleteVacunasUseCase = new DeleteVacunacionUseCase(vacunasRepository);
export const readVacunasByIdUseCase = new ReadByIdVacunacionUseCase(vacunasRepository);
export const updateVacunasUseCase = new UpdateVacunacionUseCase(vacunasRepository);

export const createVacunasController = new CreateVacunacion_Controller(createVacunasUseCase);
export const readAllVacunasController = new ReadAllVacunacion_Controller(readAllVacunasUseCase);
export const deleteVacunasController = new DeleteVacunacionController(deleteVacunasUseCase);
export const readVacunasByIdController = new ReadById_Controller(readVacunasByIdUseCase);
export const updateVacunasController = new UpdateVacunacion_Controller(updateVacunasUseCase);

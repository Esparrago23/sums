import { InMemoryVacunasRepository } from './repositories/inMemoryVacunasRepository';

import { CreateVacunasUseCase } from '../application/createVacunas_UseCase';
import { ReadAllVacunasUseCase } from '../application/readAllVacunas_UseCase';
import { DeleteVacunasUseCase } from '../application/deleteVacunas_UseCase';
import { ReadVacunasByIdUseCase } from '../application/readVacunasById_UseCase';
import { UpdateVacunasUseCase } from '../application/updateVacunas_UseCase';

import { CreateVacunas_Controller } from './controller/createVacunas_Controller';
import { ReadAllVacunas_Controller } from './controller/readAllVacunas_Controller';
import { DeleteVacunas_Controller } from './controller/deleteVacunas_Controller';
import { ReadVacunasById_Controller } from './controller/readVacunasById_Controller';
import { UpdateVacunas_Controller } from './controller/updateVacunas_Controller';

export const vacunasRepository = new InMemoryVacunasRepository();

export const createVacunasUseCase = new CreateVacunasUseCase(vacunasRepository);
export const readAllVacunasUseCase = new ReadAllVacunasUseCase(vacunasRepository);
export const deleteVacunasUseCase = new DeleteVacunasUseCase(vacunasRepository);
export const readVacunasByIdUseCase = new ReadVacunasByIdUseCase(vacunasRepository);
export const updateVacunasUseCase = new UpdateVacunasUseCase(vacunasRepository);

export const createVacunasController = new CreateVacunas_Controller(createVacunasUseCase);
export const readAllVacunasController = new ReadAllVacunas_Controller(readAllVacunasUseCase);
export const deleteVacunasController = new DeleteVacunas_Controller(deleteVacunasUseCase);
export const readVacunasByIdController = new ReadVacunasById_Controller(readVacunasByIdUseCase);
export const updateVacunasController = new UpdateVacunas_Controller(updateVacunasUseCase);
import { InMemoryDosisRepository } from './repositories/inMemoryDosisRepository';

import { CreateDosisUseCase } from '../application/createDosis_UseCase';
import { ReadAllDosisUseCase } from '../application/readAllDosis_UseCase';
import { DeleteDosisUseCase } from '../application/deleteDosis_UseCase';
import { ReadDosisByIdUseCase } from '../application/readDosisById_UseCase';
import { UpdateDosisUseCase } from '../application/updateDosis_UseCase';

import { CreateDosis_Controller } from './controller/createDosis_Controller';
import { ReadAllDosis_Controller } from './controller/readAllDosis_Controller';
import { DeleteDosis_Controller } from './controller/deleteDosis_Controller';
import { ReadDosisById_Controller } from './controller/readDosisById_Controller';
import { UpdateDosis_Controller } from './controller/updateDosis_Controller';

export const dosisRepository = new InMemoryDosisRepository();

export const createDosisUseCase = new CreateDosisUseCase(dosisRepository);
export const readAllDosisUseCase = new ReadAllDosisUseCase(dosisRepository);
export const deleteDosisUseCase = new DeleteDosisUseCase(dosisRepository);
export const readDosisByIdUseCase = new ReadDosisByIdUseCase(dosisRepository);
export const updateDosisUseCase = new UpdateDosisUseCase(dosisRepository);

export const createDosisController = new CreateDosis_Controller(createDosisUseCase);
export const readAllDosisController = new ReadAllDosis_Controller(readAllDosisUseCase);
export const deleteDosisController = new DeleteDosis_Controller(deleteDosisUseCase);
export const readDosisByIdController = new ReadDosisById_Controller(readDosisByIdUseCase);
export const updateDosisController = new UpdateDosis_Controller(updateDosisUseCase);
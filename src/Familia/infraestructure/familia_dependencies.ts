import { InMemoryFamiliaRepository } from './repositories/inMemoryFamiliaRepository';

import { CreateFamiliaUseCase } from '../application/createFamilia_UseCase';
import { ReadAllFamiliaUseCase } from '../application/readAllFamilia_UseCase';
import { DeleteFamiliaUseCase } from '../application/deleteFamilia_UseCase';
import { ReadFamiliaByIdUseCase } from '../application/readFamiliaById_UseCase';
import { UpdateFamiliaUseCase } from '../application/updateFamilia_UseCase';

import { CreateFamilia_Controller } from './controllers/createFamilia_Controller';
import { ReadAllFamilia_Controller } from './controllers/readAllFamilia_Controller';
import { DeleteFamilia_Controller } from './controllers/deleteFamilia_Controller';
import { ReadFamiliaById_Controller } from './controllers/readFamiliaById_Controller';
import { UpdateFamilia_Controller } from './controllers/updateFamilia_Controller';

export const familiaRepository = new InMemoryFamiliaRepository();

export const createFamiliaUseCase = new CreateFamiliaUseCase(familiaRepository);
export const readAllFamiliaUseCase = new ReadAllFamiliaUseCase(familiaRepository);
export const deleteFamiliaUseCase = new DeleteFamiliaUseCase(familiaRepository);
export const readFamiliaByIdUseCase = new ReadFamiliaByIdUseCase(familiaRepository);
export const updateFamiliaUseCase = new UpdateFamiliaUseCase(familiaRepository);

export const createFamiliaController = new CreateFamilia_Controller(createFamiliaUseCase);
export const readAllFamiliaController = new ReadAllFamilia_Controller(readAllFamiliaUseCase);
export const deleteFamiliaController = new DeleteFamilia_Controller(deleteFamiliaUseCase);
export const readFamiliaByIdController = new ReadFamiliaById_Controller(readFamiliaByIdUseCase);
export const updateFamiliaController = new UpdateFamilia_Controller(updateFamiliaUseCase);

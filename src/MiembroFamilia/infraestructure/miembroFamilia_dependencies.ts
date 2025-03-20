import { InMemoryMiembroFamiliaRepository } from './repositories/inMemoryMiembroFamiliaRepository';

import { CreateMiembroFamiliaUseCase } from '../application/createMiembroFamilia_UseCase';
import { ReadAllMiembroFamiliaUseCase } from '../application/readAllMiembroFamilia_UseCase';
import { DeleteMiembroFamiliaUseCase } from '../application/deleteMiembroFamilia_UseCase';
import { ReadMiembroFamiliaByIdUseCase } from '../application/readMiembroFamiliaById_UseCase';
import { UpdateMiembroFamiliaUseCase } from '../application/updateMiembroFamilia_UseCase';

import { CreateMiembroFamilia_Controller } from './controllers/createMiembroFamilia_Controller';
import { ReadAllMiembroFamilia_Controller } from './controllers/readAllMiembroFamilia_Controller';
import { DeleteMiembroFamilia_Controller } from './controllers/deleteMiembroFamilia_Controller';
import { ReadMiembroFamiliaById_Controller } from './controllers/readMiembroFamiliaById_Controller';
import { UpdateMiembroFamilia_Controller } from './controllers/updateMiembroFamilia_Controller';

export const miembroFamiliaRepository = new InMemoryMiembroFamiliaRepository();

export const createMiembroFamiliaUseCase = new CreateMiembroFamiliaUseCase(miembroFamiliaRepository);
export const readAllMiembroFamiliaUseCase = new ReadAllMiembroFamiliaUseCase(miembroFamiliaRepository);
export const deleteMiembroFamiliaUseCase = new DeleteMiembroFamiliaUseCase(miembroFamiliaRepository);
export const readMiembroFamiliaByIdUseCase = new ReadMiembroFamiliaByIdUseCase(miembroFamiliaRepository);
export const updateMiembroFamiliaUseCase = new UpdateMiembroFamiliaUseCase(miembroFamiliaRepository);

export const createMiembroFamiliaController = new CreateMiembroFamilia_Controller(createMiembroFamiliaUseCase);
export const readAllMiembroFamiliaController = new ReadAllMiembroFamilia_Controller(readAllMiembroFamiliaUseCase);
export const deleteMiembroFamiliaController = new DeleteMiembroFamilia_Controller(deleteMiembroFamiliaUseCase);
export const readMiembroFamiliaByIdController = new ReadMiembroFamiliaById_Controller(readMiembroFamiliaByIdUseCase);
export const updateMiembroFamiliaController = new UpdateMiembroFamilia_Controller(updateMiembroFamiliaUseCase);

import { InMemoryDireccionRepository } from '../infraestructure/repository/inMemoryDireccionRepository';

import { CreateDireccionUseCase } from '../application/createDireccion_UseCase';
import { ReadAllDireccionUseCase } from '../application/readAllDireccion_UseCase';
import { DeleteDireccionUseCase } from '../application/deleteDireccion_UseCase';
import { ReadDireccionByIdUseCase } from '../application/readDireccionById_UseCase';
import { UpdateDireccionUseCase } from '../application/updateDireccion_UseCase';

import { CreateDireccion_Controller } from './controllers/createDireccion_Controller';
import { ReadAllDireccion_Controller } from './controllers/readAllDireccion_Controller';
import { DeleteDireccion_Controller } from './controllers/deleteDireccion_Controller';
import { ReadDireccionById_Controller } from './controllers/readDireccionById_Controller';
import { UpdateDireccion_Controller } from './controllers/updateDireccion_Controller';

export const direccionRepository = new InMemoryDireccionRepository();

export const createDireccionUseCase = new CreateDireccionUseCase(direccionRepository);
export const readAllDireccionUseCase = new ReadAllDireccionUseCase(direccionRepository);
export const deleteDireccionUseCase = new DeleteDireccionUseCase(direccionRepository);
export const readDireccionByIdUseCase = new ReadDireccionByIdUseCase(direccionRepository);
export const updateDireccionUseCase = new UpdateDireccionUseCase(direccionRepository);

export const createDireccionController = new CreateDireccion_Controller(createDireccionUseCase);
export const readAllDireccionController = new ReadAllDireccion_Controller(readAllDireccionUseCase);
export const deleteDireccionController = new DeleteDireccion_Controller(deleteDireccionUseCase);
export const readDireccionByIdController = new ReadDireccionById_Controller(readDireccionByIdUseCase);
export const updateDireccionController = new UpdateDireccion_Controller(updateDireccionUseCase);
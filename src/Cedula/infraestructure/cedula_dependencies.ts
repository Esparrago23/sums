import { InMemoryCedulaRepository } from './repositories/inMemoryCedulaRepository';

import { CreateCedulaUseCase } from '../application/createCedula_UseCase';
import { ReadAllCedulaUseCase } from '../application/readAllCedula_UseCase';
import { DeleteCedulaUseCase } from '../application/deleteCedula_UseCase';
import { ReadCedulaByIdUseCase } from '../application/readCedulaById_UseCase';
import { UpdateCedulaUseCase } from '../application/updateCedula_UseCase';

import { CreateCedula_Controller } from './controllers/createCedula_Controller';
import { ReadAllCedula_Controller } from './controllers/readAllCedula_Controller';
import { DeleteCedula_Controller } from './controllers/deleteCedula_Controller';
import { ReadCedulaById_Controller } from './controllers/readCedulaById_Controller';
import { UpdateCedula_Controller } from './controllers/updateCedula_Controller';

export const cedulaRepository = new InMemoryCedulaRepository();

export const createCedulaUseCase = new CreateCedulaUseCase(cedulaRepository);
export const readAllCedulaUseCase = new ReadAllCedulaUseCase(cedulaRepository);
export const deleteCedulaUseCase = new DeleteCedulaUseCase(cedulaRepository);
export const readCedulaByIdUseCase = new ReadCedulaByIdUseCase(cedulaRepository);
export const updateCedulaUseCase = new UpdateCedulaUseCase(cedulaRepository);

export const createCedulaController = new CreateCedula_Controller(createCedulaUseCase);
export const readAllCedulaController = new ReadAllCedula_Controller(readAllCedulaUseCase);
export const deleteCedulaController = new DeleteCedula_Controller(deleteCedulaUseCase);
export const readCedulaByIdController = new ReadCedulaById_Controller(readCedulaByIdUseCase);
export const updateCedulaController = new UpdateCedula_Controller(updateCedulaUseCase);

import { InMemoryServiciosBasicosRepository } from './repository/inMemoryServiciosBasicosRepository';

import { CreateServiciosBasicosUseCase } from '../application/createServiciosBasicos_UseCase';
import { ReadAllServiciosBasicosUseCase } from '../application/readAllServiciosBasicos_UseCase';
import { ReadServiciosBasicosByIdUseCase } from '../application/readServiciosBasicosById_UseCase';
import { UpdateServiciosBasicosUseCase } from '../application/updateServiciosBasicos_UseCase';
import { DeleteServiciosBasicosUseCase } from '../application/deleteServiciosBasicos_UseCase';

import { CreateServiciosBasicos_Controller } from './controllers/createServiciosBasicos_Controller';
import { ReadAllServiciosBasicos_Controller } from './controllers/readAllServiciosBasicos_Controller';
import { ReadServiciosBasicosById_Controller } from './controllers/readServiciosBasicosById_Controller';
import { UpdateServiciosBasicos_Controller } from './controllers/updateServiciosBasicos_Controller';
import { DeleteServiciosBasicos_Controller } from './controllers/deleteServiciosBasicos_Controller';

export const serviciosBasicosRepository = new InMemoryServiciosBasicosRepository();

export const createServiciosBasicosUseCase = new CreateServiciosBasicosUseCase(serviciosBasicosRepository);
export const readAllServiciosBasicosUseCase = new ReadAllServiciosBasicosUseCase(serviciosBasicosRepository);
export const readServiciosBasicosByIdUseCase = new ReadServiciosBasicosByIdUseCase(serviciosBasicosRepository);
export const updateServiciosBasicosUseCase = new UpdateServiciosBasicosUseCase(serviciosBasicosRepository);
export const deleteServiciosBasicosUseCase = new DeleteServiciosBasicosUseCase(serviciosBasicosRepository);

export const createServiciosBasicosController = new CreateServiciosBasicos_Controller(createServiciosBasicosUseCase);
export const readAllServiciosBasicosController = new ReadAllServiciosBasicos_Controller(readAllServiciosBasicosUseCase);
export const readServiciosBasicosByIdController = new ReadServiciosBasicosById_Controller(readServiciosBasicosByIdUseCase);
export const updateServiciosBasicosController = new UpdateServiciosBasicos_Controller(updateServiciosBasicosUseCase);
export const deleteServiciosBasicosController = new DeleteServiciosBasicos_Controller(deleteServiciosBasicosUseCase);


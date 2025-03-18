import { InMemoryServiciosSaludRepository } from '../infraestructure/repositories/inMemoryServiciosSaludRepository';

import { CreateServiciosSaludUseCase } from '../application/createServiciosSalud_UseCase';
import { ReadAllServiciosSaludUseCase } from '../application/readAllServiciosSalud_UseCase';
import { DeleteServiciosSaludUseCase } from '../application/deleteServiciosSalud_UseCase';
import { ReadServiciosSaludByIdUseCase } from '../application/readServiciosSaludById_UseCase';
import { UpdateServiciosSaludUseCase } from '../application/updateServiciosSalud_UseCase';

import { CreateServiciosSalud_Controller } from './controllers/createServiciosSalud_Controller';
import { ReadAllServiciosSalud_Controller } from './controllers/readAllServiciosSalud_Controller';
import { DeleteServiciosSalud_Controller } from './controllers/deleteServiciosSalud_Controller';
import { ReadServiciosSaludById_Controller } from './controllers/readServiciosSaludById_Controller';
import { UpdateServiciosSalud_Controller } from './controllers/updateServiciosSalud_Controller';

export const serviciosSaludRepository = new InMemoryServiciosSaludRepository();

export const createServiciosSaludUseCase = new CreateServiciosSaludUseCase(serviciosSaludRepository);
export const readAllServiciosSaludUseCase = new ReadAllServiciosSaludUseCase(serviciosSaludRepository);
export const deleteServiciosSaludUseCase = new DeleteServiciosSaludUseCase(serviciosSaludRepository);
export const readServiciosSaludByIdUseCase = new ReadServiciosSaludByIdUseCase(serviciosSaludRepository);
export const updateServiciosSaludUseCase = new UpdateServiciosSaludUseCase(serviciosSaludRepository);

export const createServiciosSaludController = new CreateServiciosSalud_Controller(createServiciosSaludUseCase);
export const readAllServiciosSaludController = new ReadAllServiciosSalud_Controller(readAllServiciosSaludUseCase);
export const deleteServiciosSaludController = new DeleteServiciosSalud_Controller(deleteServiciosSaludUseCase);
export const readServiciosSaludByIdController = new ReadServiciosSaludById_Controller(readServiciosSaludByIdUseCase);
export const updateServiciosSaludController = new UpdateServiciosSalud_Controller(updateServiciosSaludUseCase);
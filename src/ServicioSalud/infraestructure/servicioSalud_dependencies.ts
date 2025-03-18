import { InMemoryServicioSaludRepository } from './repositories/inMemoryServicioSaludRepository';

import { CreateServicioSaludUseCase } from '../application/createServicioSalud_UseCase';
import { ReadAllServicioSaludUseCase } from '../application/readAllServicioSalud_UseCase';
import { DeleteServicioSaludUseCase } from '../application/deleteServicioSalud_UseCase';
import { ReadServicioSaludByIdUseCase } from '../application/readServicioSaludById_UseCase';
import { UpdateServicioSaludUseCase } from '../application/updateServicioSalud_UseCase';

import { CreateServicioSalud_Controller } from './controllers/createServicioSalud_Controller';
import { ReadAllServicioSalud_Controller } from './controllers/readAllServicioSalud_Controller';
import { DeleteServicioSalud_Controller } from './controllers/deleteServicioSalud_Controller';
import { ReadServicioSaludById_Controller } from './controllers/readServicioSaludById_Controller';
import { UpdateServicioSalud_Controller } from './controllers/updateServicioSalud_Controller';

export const servicioSaludRepository = new InMemoryServicioSaludRepository();

export const createServicioSaludUseCase = new CreateServicioSaludUseCase(servicioSaludRepository);
export const readAllServicioSaludUseCase = new ReadAllServicioSaludUseCase(servicioSaludRepository);
export const deleteServicioSaludUseCase = new DeleteServicioSaludUseCase(servicioSaludRepository);
export const readServicioSaludByIdUseCase = new ReadServicioSaludByIdUseCase(servicioSaludRepository);
export const updateServicioSaludUseCase = new UpdateServicioSaludUseCase(servicioSaludRepository);

export const createServicioSaludController = new CreateServicioSalud_Controller(createServicioSaludUseCase);
export const readAllServicioSaludController = new ReadAllServicioSalud_Controller(readAllServicioSaludUseCase);
export const deleteServicioSaludController = new DeleteServicioSalud_Controller(deleteServicioSaludUseCase);
export const readServicioSaludByIdController = new ReadServicioSaludById_Controller(readServicioSaludByIdUseCase);
export const updateServicioSaludController = new UpdateServicioSalud_Controller(updateServicioSaludUseCase);
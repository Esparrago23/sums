import { InMemoryEducacionRepository } from './repositories/inMemoryEducacionRepository';

import { CreateEducacionUseCase } from '../application/createEducacion_UseCase';
import { ReadAllEducacionUseCase } from '../application/readAllEducacion_UseCase';
import { DeleteEducacionUseCase } from '../application/deleteEducacion_UseCase';
import { ReadEducacionByIdUseCase } from '../application/readEducacionById_UseCase';
import { UpdateEducacionUseCase } from '../application/updateEducacion_UseCase';

import { CreateEducacion_Controller } from './controllers/createEducacion_Controller';
import { ReadAllEducacion_Controller } from './controllers/readAllEducacion_Controller';
import { DeleteEducacion_Controller } from './controllers/deleteEducacion_Controller';
import { ReadEducacionById_Controller } from './controllers/readEducacionById_Controller';
import { UpdateEducacion_Controller } from './controllers/updateEducacion_Controller';

export const educacionRepository = new InMemoryEducacionRepository();

export const createEducacionUseCase = new CreateEducacionUseCase(educacionRepository);
export const readAllEducacionUseCase = new ReadAllEducacionUseCase(educacionRepository);
export const deleteEducacionUseCase = new DeleteEducacionUseCase(educacionRepository);
export const readEducacionByIdUseCase = new ReadEducacionByIdUseCase(educacionRepository);
export const updateEducacionUseCase = new UpdateEducacionUseCase(educacionRepository);

export const createEducacionController = new CreateEducacion_Controller(createEducacionUseCase);
export const readAllEducacionController = new ReadAllEducacion_Controller(readAllEducacionUseCase);
export const deleteEducacionController = new DeleteEducacion_Controller(deleteEducacionUseCase);
export const readEducacionByIdController = new ReadEducacionById_Controller(readEducacionByIdUseCase);
export const updateEducacionController = new UpdateEducacion_Controller(updateEducacionUseCase);
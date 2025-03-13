import { InMemoryPersonaRepository } from './repositories/inMemoryPersonaRepository';

import { CreatePersonaUseCase } from '../application/createPersona_UseCase';
import { ReadAllPersonaUseCase } from '../application/readAllPersona_UseCase';
import { DeletePersonaUseCase } from '../application/deletePersona_UseCase';
import { ReadPersonaByIdUseCase } from '../application/readPersonaById_UseCase';
import { UpdatePersonaUseCase } from '../application/updatePersona_UseCase';

import { CreatePersona_Controller } from './controller/createPersona_Controller';
import { ReadAllPersona_Controller } from './controller/readAllPersona_Controller';
import { DeletePersona_Controller } from './controller/deletePersona_Controller';
import { ReadPersonaById_Controller } from './controller/readPersonaById_Controller';
import { UpdatePersona_Controller } from './controller/updatePersona_Controller';

export const personaRepository = new InMemoryPersonaRepository();

export const createPersonaUseCase = new CreatePersonaUseCase(personaRepository);
export const readAllPersonaUseCase = new ReadAllPersonaUseCase(personaRepository);
export const deletePersonaUseCase = new DeletePersonaUseCase(personaRepository);
export const readPersonaByIdUseCase = new ReadPersonaByIdUseCase(personaRepository);
export const updatePersonaUseCase = new UpdatePersonaUseCase(personaRepository);

export const createPersonaController = new CreatePersona_Controller(createPersonaUseCase);
export const readAllPersonaController = new ReadAllPersona_Controller(readAllPersonaUseCase);
export const deletePersonaController = new DeletePersona_Controller(deletePersonaUseCase);
export const readPersonaByIdController = new ReadPersonaById_Controller(readPersonaByIdUseCase);
export const updatePersonaController = new UpdatePersona_Controller(updatePersonaUseCase);
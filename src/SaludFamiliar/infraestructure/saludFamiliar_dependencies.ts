import { InMemorySaludFamiliarRepository } from './repositories/InMemorySaludFamiliarRepository';
import { CreateSaludFamiliarUseCase } from '../application/createSaludFamiliar_UseCase';
import { ReadAllSaludFamiliarUseCase } from '../application/readAllSaludFamiliar_UseCase';
import { ReadSaludFamiliarByIdUseCase } from '../application/readSaludFamiliarById_UseCase';
import { UpdateSaludFamiliarUseCase } from '../application/updateSaludFamiliar_UseCase';
import { DeleteSaludFamiliarUseCase } from '../application/deleteSaludFamiliar_UseCase';
import { CreateSaludFamiliar_Controller } from './controllers/createSaludFamiliar_Controller';
import { ReadAllSaludFamiliar_Controller } from './controllers/readAllSaludFamiliar_Controller';
import { ReadSaludFamiliarById_Controller } from './controllers/readSaludFamiliarById_Controller';
import { UpdateSaludFamiliar_Controller } from './controllers/updateSaludFamiliar_Controller';
import { DeleteSaludFamiliar_Controller } from './controllers/deleteSaludFamiliar_Controller';

// Repositorio
const saludFamiliarRepository = new InMemorySaludFamiliarRepository();

// Casos de uso
const createSaludFamiliarUseCase = new CreateSaludFamiliarUseCase(saludFamiliarRepository);
const readAllSaludFamiliarUseCase = new ReadAllSaludFamiliarUseCase(saludFamiliarRepository);
const readSaludFamiliarByIdUseCase = new ReadSaludFamiliarByIdUseCase(saludFamiliarRepository);
const updateSaludFamiliarUseCase = new UpdateSaludFamiliarUseCase(saludFamiliarRepository);
const deleteSaludFamiliarUseCase = new DeleteSaludFamiliarUseCase(saludFamiliarRepository);

// Controladores
export const createSaludFamiliarController = new CreateSaludFamiliar_Controller(createSaludFamiliarUseCase);
export const readAllSaludFamiliarController = new ReadAllSaludFamiliar_Controller(readAllSaludFamiliarUseCase);
export const readSaludFamiliarByIdController = new ReadSaludFamiliarById_Controller(readSaludFamiliarByIdUseCase);
export const updateSaludFamiliarController = new UpdateSaludFamiliar_Controller(updateSaludFamiliarUseCase);
export const deleteSaludFamiliarController = new DeleteSaludFamiliar_Controller(deleteSaludFamiliarUseCase);
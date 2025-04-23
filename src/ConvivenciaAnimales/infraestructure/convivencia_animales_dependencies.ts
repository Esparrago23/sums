// src/ConvivenciaAnimales/infraestructure/convivencia_animales_dependencies.ts
import { InMemoryConvivenciaAnimalesRepository } from './repositories/inMemoryConvivenciaAnimalesRepository';
import { IConvivenciaAnimalesRepository } from '../domain/repositories/IConvivenciaAnimalesRepository';

import { CreateConvivenciaAnimalesUseCase } from '../application/createConvivenciaAnimales_UseCase';
import { ReadAllConvivenciaAnimalesUseCase } from '../application/readAllConvivenciaAnimales_UseCase';
import { DeleteConvivenciaAnimalesUseCase } from '../application/deleteConvivenciaAnimales_UseCase';
import { ReadConvivenciaAnimalesByIdUseCase } from '../application/readConvivenciaAnimalesById_UseCase';
import { UpdateConvivenciaAnimalesUseCase } from '../application/updateConvivenciaAnimales_UseCase';

import { CreateConvivenciaAnimales_Controller } from './controllers/createConvivenciaAnimales_Controller';
import { ReadAllConvivenciaAnimales_Controller } from './controllers/readAllConvivenciaAnimales_Controller';
import { DeleteConvivenciaAnimales_Controller } from './controllers/deleteConvivenciaAnimales_Controller';
import { ReadConvivenciaAnimalesById_Controller } from './controllers/readConvivenciaAnimalesById_Controller';
import { UpdateConvivenciaAnimales_Controller } from './controllers/updateConvivenciaAnimales_Controller';

// Explícitamente tipado para asegurar que TypeScript reconozca la implementación
export const convivenciaAnimalesRepository: IConvivenciaAnimalesRepository = new InMemoryConvivenciaAnimalesRepository();

export const createConvivenciaAnimalesUseCase = new CreateConvivenciaAnimalesUseCase(convivenciaAnimalesRepository);
export const readAllConvivenciaAnimalesUseCase = new ReadAllConvivenciaAnimalesUseCase(convivenciaAnimalesRepository);
export const deleteConvivenciaAnimalesUseCase = new DeleteConvivenciaAnimalesUseCase(convivenciaAnimalesRepository);
export const readConvivenciaAnimalesByIdUseCase = new ReadConvivenciaAnimalesByIdUseCase(convivenciaAnimalesRepository);
export const updateConvivenciaAnimalesUseCase = new UpdateConvivenciaAnimalesUseCase(convivenciaAnimalesRepository);

export const createConvivenciaAnimalesController = new CreateConvivenciaAnimales_Controller(createConvivenciaAnimalesUseCase);
export const readAllConvivenciaAnimalesController = new ReadAllConvivenciaAnimales_Controller(readAllConvivenciaAnimalesUseCase);
export const deleteConvivenciaAnimalesController = new DeleteConvivenciaAnimales_Controller(deleteConvivenciaAnimalesUseCase);
export const readConvivenciaAnimalesByIdController = new ReadConvivenciaAnimalesById_Controller(readConvivenciaAnimalesByIdUseCase);
export const updateConvivenciaAnimalesController = new UpdateConvivenciaAnimales_Controller(updateConvivenciaAnimalesUseCase);
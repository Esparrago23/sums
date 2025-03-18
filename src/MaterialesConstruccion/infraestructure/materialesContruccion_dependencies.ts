import { InMemoryMaterialesConstruccionRepository } from '../infraestructure/repository/inMemoryMaterialesConstruccionRepository';
import { CreateMaterialesConstruccionUseCase } from '../application/createMaterialesConstruccion_UseCase';
import { ReadAllMaterialesConstruccionUseCase } from '../application/readAllMaterialesConstruccion_UseCase';
import { DeleteMaterialesConstruccionUseCase } from '../application/deleteMaterialesConstruccion_UseCase';
import { ReadMaterialesConstruccionByIdUseCase } from '../application/readMaterialesConstruccionById_UseCase';
import { UpdateMaterialesConstruccionUseCase } from '../application/updateMaterialesConstruccion_UseCase';

import { CreateMaterialesConstruccion_Controller } from './controllers/createMaterialesConstruccion_Controller';
import { ReadAllMaterialesConstruccion_Controller } from './controllers/readAllMaterialesConstruccion_Controller';
import { DeleteMaterialesConstruccion_Controller } from './controllers/deleteMaterialesConstruccion_Controller';
import { ReadMaterialesConstruccionById_Controller } from './controllers/readMaterialesConstruccionById_Controller';
import { UpdateMaterialesConstruccion_Controller } from './controllers/updateMaterialesConstruccion_Controller';

export const materialesConstruccionRepository = new InMemoryMaterialesConstruccionRepository();

export const createMaterialesConstruccionUseCase = new CreateMaterialesConstruccionUseCase(materialesConstruccionRepository);
export const readAllMaterialesConstruccionUseCase = new ReadAllMaterialesConstruccionUseCase(materialesConstruccionRepository);
export const deleteMaterialesConstruccionUseCase = new DeleteMaterialesConstruccionUseCase(materialesConstruccionRepository);
export const readMaterialesConstruccionByIdUseCase = new ReadMaterialesConstruccionByIdUseCase(materialesConstruccionRepository);
export const updateMaterialesConstruccionUseCase = new UpdateMaterialesConstruccionUseCase(materialesConstruccionRepository);

export const createMaterialesConstruccionController = new CreateMaterialesConstruccion_Controller(createMaterialesConstruccionUseCase);
export const readAllMaterialesConstruccionController = new ReadAllMaterialesConstruccion_Controller(readAllMaterialesConstruccionUseCase);
export const deleteMaterialesConstruccionController = new DeleteMaterialesConstruccion_Controller(deleteMaterialesConstruccionUseCase);
export const readMaterialesConstruccionByIdController = new ReadMaterialesConstruccionById_Controller(readMaterialesConstruccionByIdUseCase);
export const updateMaterialesConstruccionController = new UpdateMaterialesConstruccion_Controller(updateMaterialesConstruccionUseCase);
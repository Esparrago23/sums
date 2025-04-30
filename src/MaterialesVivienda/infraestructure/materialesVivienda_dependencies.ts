import { InMemoryMaterialesConstruccionRepository } from '../infraestructure/repository/inMemoryMaterialesViviendaRepository';
import { CreateMaterialesViviendaUseCase } from '../application/createMaterialesVivienda_UseCase';
import { ReadAllMaterialesViviendaUseCase } from '../application/readAllMaterialesVivienda_UseCase';
import { DeleteMaterialesViviendaUseCase } from '../application/deleteMaterialesVivienda_UseCase';
import { ReadMaterialesViviendaByIdUseCase } from '../application/readMaterialesViviendaById_UseCase';
import { UpdateMaterialesViviendaUseCase } from '../application/updateMaterialesVivienda_UseCase';

import { CreateMaterialesVivienda_Controller } from './controllers/createMaterialesVivienda_Controller';
import { ReadAllMaterialesVivienda_Controller } from './controllers/readAllMaterialesVivienda_Controller';
import { DeleteMaterialesVivienda_Controller } from './controllers/deleteMaterialesVivienda_Controller';
import { ReadMaterialesViviendaById_Controller } from './controllers/readMaterialesViviendaById_Controller';
import { UpdateMaterialesVivienda_Controller } from './controllers/updateMaterialesVivienda_Controller';

export const materialesViviendaRepository = new InMemoryMaterialesConstruccionRepository();

export const createMaterialesViviendaUseCase = new CreateMaterialesViviendaUseCase(materialesViviendaRepository);
export const readAllMaterialesViviendaUseCase = new ReadAllMaterialesViviendaUseCase(materialesViviendaRepository);
export const deleteMaterialesViviendaUseCase = new DeleteMaterialesViviendaUseCase(materialesViviendaRepository);
export const readMaterialesViviendaByIdUseCase = new ReadMaterialesViviendaByIdUseCase(materialesViviendaRepository);
export const updateMaterialesViviendaUseCase = new UpdateMaterialesViviendaUseCase(materialesViviendaRepository);

export const createMaterialesViviendaController = new CreateMaterialesVivienda_Controller(createMaterialesViviendaUseCase);
export const readAllMaterialesViviendaController = new ReadAllMaterialesVivienda_Controller(readAllMaterialesViviendaUseCase);
export const deleteMaterialesViviendaController = new DeleteMaterialesVivienda_Controller(deleteMaterialesViviendaUseCase);
export const readMaterialesViviendaByIdController = new ReadMaterialesViviendaById_Controller(readMaterialesViviendaByIdUseCase);
export const updateMaterialesViviendaController = new UpdateMaterialesVivienda_Controller(updateMaterialesViviendaUseCase);
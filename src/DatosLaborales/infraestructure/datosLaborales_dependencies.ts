import { InMemoryDatosLaboralesRepository } from './repositories/inMemoryDatosLaboralesRepository';

import { CreateDatosLaboralesUseCase } from '../application/createDatosLaborales_UseCase';
import { ReadAllDatosLaboralesUseCase } from '../application/readAllDatosLaborales_UseCase';
import { DeleteDatosLaboralesUseCase } from '../application/deleteDatosLaborales_UseCase';
import { ReadDatosLaboralesByIdUseCase } from '../application/readDatosLaboralesById_UseCase';
import { UpdateDatosLaboralesUseCase } from '../application/updateDatosLaborales_UseCase';

import { CreateDatosLaborales_Controller } from './controllers/createDatosLaborales_Controller';
import { ReadAllDatosLaborales_Controller } from './controllers/readAllDatosLaborales_Controller';
import { DeleteDatosLaborales_Controller } from './controllers/deleteDatosLaborales_Controller';
import { ReadDatosLaboralesById_Controller } from './controllers/readDatosLaboralesById_Controller';
import { UpdateDatosLaborales_Controller } from './controllers/updateDatosLaborales_Controller';

export const datosLaboralesRepository = new InMemoryDatosLaboralesRepository();

export const createDatosLaboralesUseCase = new CreateDatosLaboralesUseCase(datosLaboralesRepository);
export const readAllDatosLaboralesUseCase = new ReadAllDatosLaboralesUseCase(datosLaboralesRepository);
export const deleteDatosLaboralesUseCase = new DeleteDatosLaboralesUseCase(datosLaboralesRepository);
export const readDatosLaboralesByIdUseCase = new ReadDatosLaboralesByIdUseCase(datosLaboralesRepository);
export const updateDatosLaboralesUseCase = new UpdateDatosLaboralesUseCase(datosLaboralesRepository);

export const createDatosLaboralesController = new CreateDatosLaborales_Controller(createDatosLaboralesUseCase);
export const readAllDatosLaboralesController = new ReadAllDatosLaborales_Controller(readAllDatosLaboralesUseCase);
export const deleteDatosLaboralesController = new DeleteDatosLaborales_Controller(deleteDatosLaboralesUseCase);
export const readDatosLaboralesByIdController = new ReadDatosLaboralesById_Controller(readDatosLaboralesByIdUseCase);
export const updateDatosLaboralesController = new UpdateDatosLaborales_Controller(updateDatosLaboralesUseCase);

import { InMemoryEstiloVidaRepository } from './repositories/inMemoryEstiloVidaRepository';

import { CreateEstiloVidaUseCase } from '../application/createEstiloVida_UseCase';
import { ReadAllEstiloVidaUseCase } from '../application/readAllEstiloVida_UseCase';
import { DeleteEstiloVidaUseCase } from '../application/deleteEstiloVida_UseCase';
import { ReadEstiloVidaByIdUseCase } from '../application/readEstiloVidaById_UseCase';
import { UpdateEstiloVidaUseCase } from '../application/updateEstiloVida_UseCase';

import { CreateEstiloVida_Controller } from './controllers/createEstiloVida_Controller';
import { ReadAllEstiloVida_Controller } from './controllers/readAllEstiloVida_Controller';
import { DeleteEstiloVida_Controller } from './controllers/deleteEstiloVida_Controller';
import { ReadEstiloVidaById_Controller } from './controllers/readEstiloVidaById_Controller';
import { UpdateEstiloVida_Controller } from './controllers/updateEstiloVida_Controller';

export const estiloVidaRepository = new InMemoryEstiloVidaRepository();

export const createEstiloVidaUseCase = new CreateEstiloVidaUseCase(estiloVidaRepository);
export const readAllEstiloVidaUseCase = new ReadAllEstiloVidaUseCase(estiloVidaRepository);
export const deleteEstiloVidaUseCase = new DeleteEstiloVidaUseCase(estiloVidaRepository);
export const readEstiloVidaByIdUseCase = new ReadEstiloVidaByIdUseCase(estiloVidaRepository);
export const updateEstiloVidaUseCase = new UpdateEstiloVidaUseCase(estiloVidaRepository);

export const createEstiloVidaController = new CreateEstiloVida_Controller(createEstiloVidaUseCase);
export const readAllEstiloVidaController = new ReadAllEstiloVida_Controller(readAllEstiloVidaUseCase);
export const deleteEstiloVidaController = new DeleteEstiloVida_Controller(deleteEstiloVidaUseCase);
export const readEstiloVidaByIdController = new ReadEstiloVidaById_Controller(readEstiloVidaByIdUseCase);
export const updateEstiloVidaController = new UpdateEstiloVida_Controller(updateEstiloVidaUseCase);
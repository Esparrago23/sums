import { InMemoryConvivenciaAnimalesRepository} from "./repositories/inMemoryConvivenciaAnimalesRepository";

import { CreateConvivenciaAnimalesUseCase } from "../application/createConvivencia_UseCase";
import { ReadAllConvivenciaUseCase } from "../application/readAllConvivencia_UseCase";
import { DeleteConvivenciaAnimalesUseCase } from "../application/deleteConvivencia_UseCase";
import { ReadConvivenciaByIdUseCase } from "../application/readConvivenciaById_UseCase";
import { UpdateConvivenciaAnimalesUseCase } from "../application/updateConvivencia_UseCase";

import { CreateConvivencia_Controller } from "./controllers/createConvivencia_Controller";
import { ReadAllConvivencia_Controller } from "./controllers/readAllConvivencia_Controller";
import { DeleteConvivencia_Controller } from "./controllers/deleteConvivencia_Controller";
import { ReadConvivenciaById_Controller } from "./controllers/readConvivenciaById_Controller";
import { UpdateConvivencia_Controller } from "./controllers/updateConvivencia_Controller";

export const convivenciaAnimalesRepository = new InMemoryConvivenciaAnimalesRepository();

export const createConvivenciaUseCase = new CreateConvivenciaAnimalesUseCase(convivenciaAnimalesRepository);
export const readAllConvivenciaUseCase = new ReadAllConvivenciaUseCase(convivenciaAnimalesRepository);
export const deleteConvivenciaUseCase = new DeleteConvivenciaAnimalesUseCase(convivenciaAnimalesRepository);
export const readConvivenciaByIdUseCase = new ReadConvivenciaByIdUseCase(convivenciaAnimalesRepository);
export const updateConvivenciaUseCase = new UpdateConvivenciaAnimalesUseCase(convivenciaAnimalesRepository)

export const createConvivencia_Controller = new CreateConvivencia_Controller(createConvivenciaUseCase)
export const readAllConvivencia_Controller = new ReadAllConvivencia_Controller(readAllConvivenciaUseCase)
export const deleteConvivencia_Controller = new DeleteConvivencia_Controller(deleteConvivenciaUseCase)
export const readConvivenciaById_Controller = new ReadConvivenciaById_Controller(readConvivenciaByIdUseCase)
export const updateConvivencia_Controller = new UpdateConvivencia_Controller(updateConvivenciaUseCase)

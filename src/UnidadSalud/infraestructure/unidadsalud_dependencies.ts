import { InMemoryUnidadSaludRepository } from "./repositories/inMemoryUnidadSaludRepository";

import { CreateUnidadSaludUseCase } from "../application/createUnidadSaludUseCase";
import { ReadAllUnidadSaludUseCase } from "../application/readAllUnidadSaludUseCase";
import { DeleteUnidadSaludUseCase } from "../application/deleteUnidadSaludUseCase";
import { ReadUnidadSaludByIdUseCase } from "../application/readUnidadSaludByIdUseCase";
import { UpdateUnidadSaludUseCase } from "../application/updateUnidadSaludUseCase";

import { CreateUnidadSalud_Controller } from "./controllers/createUnidadSalud_Controller";
import { ReadAllUnidadSalud_Controller } from "./controllers/readAllUnidadSalud_Controller";
import { DeleteUnidadSalud_Controller } from "./controllers/deleteUnidadSalud_Controller";
import { ReadUnidadSaludById_Controller } from "./controllers/readUnidadSaludById_Controller";
import { UpdateUnidadSalud_Controller } from "./controllers/updateUnidadSalud_Controller";

export const unidadSaludRepository = new InMemoryUnidadSaludRepository();

export const createUnidadSaludUseCase = new CreateUnidadSaludUseCase(unidadSaludRepository);
export const readAllUnidadSaludUseCase = new ReadAllUnidadSaludUseCase(unidadSaludRepository);
export const deleteUnidadSaludUseCase = new DeleteUnidadSaludUseCase(unidadSaludRepository);
export const readUnidadSaludByIdUseCase = new ReadUnidadSaludByIdUseCase(unidadSaludRepository);
export const updateUnidadSaludUseCase = new UpdateUnidadSaludUseCase(unidadSaludRepository)

export const createUnidadSalud_Controller = new CreateUnidadSalud_Controller(createUnidadSaludUseCase)
export const readAllUnidadSalud_Controller = new ReadAllUnidadSalud_Controller(readAllUnidadSaludUseCase)
export const deleteUnidadSalud_Controller = new DeleteUnidadSalud_Controller(deleteUnidadSaludUseCase)
export const readUnidadSaludById_Controller = new ReadUnidadSaludById_Controller(readUnidadSaludByIdUseCase)
export const updateUnidadSalud_Controller = new UpdateUnidadSalud_Controller(updateUnidadSaludUseCase)
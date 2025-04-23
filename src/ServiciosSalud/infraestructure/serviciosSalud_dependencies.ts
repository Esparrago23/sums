import {InMemoryServicioSaludRepository} from "./repositories/inMemoryServiciosSaludRepository";
import {CreateServicioSaludUseCase} from "../application/createServiciosSalud_UseCase";
import {ReadAllServicioSaludUseCase} from "../application/readAllServiciosSalud_UseCase";
import {DeleteServicioSaludUseCase} from "../application/deleteServiciosSalud_UseCase";
import {ReadServicioSaludByIdUseCase} from "../application/readServiciosSaludById_UseCase";
import {UpdateServicioSaludUseCase} from "../application/updateServiciosSalud_UseCase";

import {CreateServicioSalud_Controller} from "./controllers/createServiciosSalud_Controller";
import {ReadAllServicioSalud_Controller} from "./controllers/readAllServiciosSalud_Controller";
import {DeleteServicioSalud_Controller} from "./controllers/deleteServiciosSalud_Controller";
import {ReadServicioSaludById_Controller} from "./controllers/readServiciosSaludById_Controller";
import {UpdateServicioSalud_Controller} from "./controllers/updateServiciosSalud_Controller";

export const servicioSaludRepository = new InMemoryServicioSaludRepository();

export const createServicioSaludUseCase = new CreateServicioSaludUseCase(servicioSaludRepository);
export const readAllServicioSaludUseCase = new ReadAllServicioSaludUseCase(servicioSaludRepository);
export const deleteServicioSaludUseCase = new DeleteServicioSaludUseCase(servicioSaludRepository);
export const readServicioSaludByIdUseCase = new ReadServicioSaludByIdUseCase(servicioSaludRepository);
export const updateServicioSaludUseCase = new UpdateServicioSaludUseCase(servicioSaludRepository);

export const createServicioSaludController = new CreateServicioSalud_Controller(createServicioSaludUseCase);
export const readAllServicioSaludController = new ReadAllServicioSalud_Controller(readAllServicioSaludUseCase);
export const deleteServicioSaludController = new DeleteServicioSalud_Controller(deleteServicioSaludUseCase);
export const readServicioSaludByIdController = new ReadServicioSaludById_Controller(readServicioSaludByIdUseCase);
export const updateServicioSaludController = new UpdateServicioSalud_Controller(updateServicioSaludUseCase);


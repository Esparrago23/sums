import {InMemoryServicioSaludRepository} from "./repositories/inMemoryServiciosSaludRepository";
import {CreateServicioSaludUseCase} from "../application/createServiciosSalud_UseCase";
import {ReadAllServicioSaludUseCase} from "../application/readAllServiciosSalud_UseCase";
import {DeleteServicioSaludUseCase} from "../application/deleteServiciosSalud_UseCase";
import {ReadServicioSaludByIdUseCase} from "../application/readServiciosSaludById_UseCase";
import {UpdateServicioSaludUseCase} from "../application/updateServiciosSalud_UseCase";
import {AgregarVisitaUseCase} from "../application/agregarVisita_UseCase";
import {EliminarVisitaUseCase} from "../application/eliminarVisita_UseCase";
import {ObtenerVisitasPorTipoUseCase} from "../application/obtenerVisitasPorTipo_UseCase";
import {ObtenerUltimaVisitaUseCase} from "../application/obtenerUltimaVisita_UseCase";

import {CreateServicioSalud_Controller} from "./controllers/createServiciosSalud_Controller";
import {ReadAllServicioSalud_Controller} from "./controllers/readAllServiciosSalud_Controller";
import {DeleteServicioSalud_Controller} from "./controllers/deleteServiciosSalud_Controller";
import {ReadServicioSaludById_Controller} from "./controllers/readServiciosSaludById_Controller";
import {UpdateServicioSalud_Controller} from "./controllers/updateServiciosSalud_Controller";
import {AgregarVisita_Controller} from "./controllers/agregarVisita_Controller";
import {EliminarVisita_Controller} from "./controllers/eliminarVisita_Controller";
import {ObtenerVisitasPorTipo_Controller} from "./controllers/obtenerVisitasPorTipo_Controller";
import {ObtenerUltimaVisita_Controller} from "./controllers/obtenerUltimaVisita_Controller";


export const servicioSaludRepository = new InMemoryServicioSaludRepository();

export const createServicioSaludUseCase = new CreateServicioSaludUseCase(servicioSaludRepository);
export const readAllServicioSaludUseCase = new ReadAllServicioSaludUseCase(servicioSaludRepository);
export const deleteServicioSaludUseCase = new DeleteServicioSaludUseCase(servicioSaludRepository);
export const readServicioSaludByIdUseCase = new ReadServicioSaludByIdUseCase(servicioSaludRepository);
export const updateServicioSaludUseCase = new UpdateServicioSaludUseCase(servicioSaludRepository);
export const agregarVisitaUseCase = new AgregarVisitaUseCase(servicioSaludRepository);
export const eliminarVisitaUseCase = new EliminarVisitaUseCase(servicioSaludRepository);
export const obtenerVisitasPorTipoUseCase = new ObtenerVisitasPorTipoUseCase(servicioSaludRepository);
export const obtenerUltimaVisitaUseCase = new ObtenerUltimaVisitaUseCase(servicioSaludRepository);


export const createServicioSaludController = new CreateServicioSalud_Controller(createServicioSaludUseCase);
export const readAllServicioSaludController = new ReadAllServicioSalud_Controller(readAllServicioSaludUseCase);
export const deleteServicioSaludController = new DeleteServicioSalud_Controller(deleteServicioSaludUseCase);
export const readServicioSaludByIdController = new ReadServicioSaludById_Controller(readServicioSaludByIdUseCase);
export const updateServicioSaludController = new UpdateServicioSalud_Controller(updateServicioSaludUseCase);
export const agregarVisitaController = new AgregarVisita_Controller(agregarVisitaUseCase);
export const eliminarVisitaController = new EliminarVisita_Controller(eliminarVisitaUseCase);
export const obtenerVisitasPorTipoController = new ObtenerVisitasPorTipo_Controller(obtenerVisitasPorTipoUseCase);
export const obtenerUltimaVisitaController = new ObtenerUltimaVisita_Controller(obtenerUltimaVisitaUseCase);



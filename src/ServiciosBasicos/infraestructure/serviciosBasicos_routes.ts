import express from 'express';
import { createServiciosBasicosController} from "./serviciosBasicos_dependencies";
import { readAllServiciosBasicosController } from './serviciosBasicos_dependencies';
import { readServiciosBasicosByIdController } from './serviciosBasicos_dependencies';
import { updateServiciosBasicosController } from './serviciosBasicos_dependencies';
import { deleteServiciosBasicosController } from './serviciosBasicos_dependencies';

export const router = express.Router();
router.post('/servicios-basicos', createServiciosBasicosController.run.bind(createServiciosBasicosController));
router.get('/servicios-basicos', readAllServiciosBasicosController.run.bind(readAllServiciosBasicosController));
router.get('/servicios-basicos/:id', readServiciosBasicosByIdController.run.bind(readServiciosBasicosByIdController));
router.put('/servicios-basicos/:id', updateServiciosBasicosController.run.bind(updateServiciosBasicosController));
router.delete('/servicios-basicos/:id', deleteServiciosBasicosController.run.bind(deleteServiciosBasicosController));

export default router;
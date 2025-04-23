import express from 'express';
import { createServicioSaludController} from "../serviciosSalud_dependencies";
import { readAllServicioSaludController} from "../serviciosSalud_dependencies";
import { deleteServicioSaludController} from "../serviciosSalud_dependencies";
import { readServicioSaludByIdController} from "../serviciosSalud_dependencies";
import { updateServicioSaludController} from "../serviciosSalud_dependencies";

export const router = express.Router();
router.post('/servicios-salud', createServicioSaludController.run.bind(createServicioSaludController));
router.get('/servicios-salud', readAllServicioSaludController.run.bind(readAllServicioSaludController));
router.delete('/servicios-salud/:id', deleteServicioSaludController.run.bind(deleteServicioSaludController));
router.get('/servicios-salud/:id', readServicioSaludByIdController.run.bind(readServicioSaludByIdController));
router.put('/servicios-salud/:id', updateServicioSaludController.run.bind(updateServicioSaludController));

export default router;
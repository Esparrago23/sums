import express from 'express';
import { createServiciosSaludController } from '../servicios_Salud_dependencies';
import { readAllServiciosSaludController } from '../servicios_Salud_dependencies';
import { deleteServiciosSaludController } from '../servicios_Salud_dependencies';
import { readServiciosSaludByIdController } from '../servicios_Salud_dependencies';
import { updateServiciosSaludController } from '../servicios_Salud_dependencies';

export const router = express.Router();
router.post('/servicios_salud', createServiciosSaludController.run.bind(createServiciosSaludController));
router.get('/servicios_salud', readAllServiciosSaludController.run.bind(readAllServiciosSaludController));
router.delete('/servicios_salud/:id', deleteServiciosSaludController.run.bind(deleteServiciosSaludController));
router.get('/servicios_salud/:id', readServiciosSaludByIdController.run.bind(readServiciosSaludByIdController));
router.put('/servicios_salud/:id', updateServiciosSaludController.run.bind(updateServiciosSaludController));

export default router;
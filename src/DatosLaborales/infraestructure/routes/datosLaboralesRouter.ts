import express from 'express';
import { createDatosLaboralesController } from '../datosLaborales_dependencies';
import { readAllDatosLaboralesController } from '../datosLaborales_dependencies';
import { deleteDatosLaboralesController } from '../datosLaborales_dependencies';
import { readDatosLaboralesByIdController } from '../datosLaborales_dependencies';
import { updateDatosLaboralesController } from '../datosLaborales_dependencies';

export const router = express.Router();
router.post('/datos_laborales', createDatosLaboralesController.run.bind(createDatosLaboralesController));
router.get('/datos_laborales', readAllDatosLaboralesController.run.bind(readAllDatosLaboralesController));
router.delete('/datos_laborales/:id', deleteDatosLaboralesController.run.bind(deleteDatosLaboralesController));
router.get('/datos_laborales/:id', readDatosLaboralesByIdController.run.bind(readDatosLaboralesByIdController));
router.put('/datos_laborales/:id', updateDatosLaboralesController.run.bind(updateDatosLaboralesController));

export default router;
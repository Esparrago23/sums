import express from 'express';
import { createMaterialesViviendaController } from '../materialesVivienda_dependencies';
import { readAllMaterialesViviendaController } from '../materialesVivienda_dependencies';
import { deleteMaterialesViviendaController } from '../materialesVivienda_dependencies';
import { readMaterialesViviendaByIdController } from '../materialesVivienda_dependencies';
import { updateMaterialesViviendaController } from '../materialesVivienda_dependencies';

export const router = express.Router();
router.post('/materiales_vivienda', createMaterialesViviendaController.run.bind(createMaterialesViviendaController));
router.get('/materiales_vivienda', readAllMaterialesViviendaController.run.bind(readAllMaterialesViviendaController));
router.delete('/materiales_vivienda/:id', deleteMaterialesViviendaController.run.bind(deleteMaterialesViviendaController));
router.get('/materiales_vivienda/:id', readMaterialesViviendaByIdController.run.bind(readMaterialesViviendaByIdController));
router.put('/materiales_vivienda/:id', updateMaterialesViviendaController.run.bind(updateMaterialesViviendaController));

export default router;
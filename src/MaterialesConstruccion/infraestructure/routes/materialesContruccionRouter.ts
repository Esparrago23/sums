import express from 'express';
import { createMaterialesConstruccionController } from '../materialesContruccion_dependencies';
import { readAllMaterialesConstruccionController } from '../materialesContruccion_dependencies';
import { deleteMaterialesConstruccionController } from '../materialesContruccion_dependencies';
import { readMaterialesConstruccionByIdController } from '../materialesContruccion_dependencies';
import { updateMaterialesConstruccionController } from '../materialesContruccion_dependencies';

export const router = express.Router();
router.post('/materiales_vivienda', createMaterialesConstruccionController.run.bind(createMaterialesConstruccionController));
router.get('/materiales_vivienda', readAllMaterialesConstruccionController.run.bind(readAllMaterialesConstruccionController));
router.delete('/materiales_vivienda/:id', deleteMaterialesConstruccionController.run.bind(deleteMaterialesConstruccionController));
router.get('/materiales_vivienda/:id', readMaterialesConstruccionByIdController.run.bind(readMaterialesConstruccionByIdController));
router.put('/materiales_vivienda/:id', updateMaterialesConstruccionController.run.bind(updateMaterialesConstruccionController));

export default router;
import express from 'express';
import { createMaterialesConstruccionController } from '../materialesContruccion_dependencies';
import { readAllMaterialesConstruccionController } from '../materialesContruccion_dependencies';
import { deleteMaterialesConstruccionController } from '../materialesContruccion_dependencies';
import { readMaterialesConstruccionByIdController } from '../materialesContruccion_dependencies';
import { updateMaterialesConstruccionController } from '../materialesContruccion_dependencies';

export const router = express.Router();
router.post('/materiales_construccion', createMaterialesConstruccionController.run.bind(createMaterialesConstruccionController));
router.get('/materiales_construccion', readAllMaterialesConstruccionController.run.bind(readAllMaterialesConstruccionController));
router.delete('/materiales_construccion/:id', deleteMaterialesConstruccionController.run.bind(deleteMaterialesConstruccionController));
router.get('/materiales_construccion/:id', readMaterialesConstruccionByIdController.run.bind(readMaterialesConstruccionByIdController));
router.put('/materiales_construccion/:id', updateMaterialesConstruccionController.run.bind(updateMaterialesConstruccionController));

export default router;
import express from 'express';
import { createFamiliaController } from '../familia_dependencies';
import { readAllFamiliaController } from '../familia_dependencies';
import { deleteFamiliaController } from '../familia_dependencies';
import { readFamiliaByIdController } from '../familia_dependencies';
import { updateFamiliaController } from '../familia_dependencies';

export const router = express.Router();
router.post('/familias', createFamiliaController.run.bind(createFamiliaController));
router.get('/familias', readAllFamiliaController.run.bind(readAllFamiliaController));
router.delete('/familias/:id', deleteFamiliaController.run.bind(deleteFamiliaController));
router.get('/familias/:id', readFamiliaByIdController.run.bind(readFamiliaByIdController));
router.put('/familias/:id', updateFamiliaController.run.bind(updateFamiliaController));

export default router;
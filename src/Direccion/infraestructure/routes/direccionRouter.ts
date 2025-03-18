import express from 'express';
import { createDireccionController } from '../direccion_dependencies';
import { readAllDireccionController } from '../direccion_dependencies';
import { deleteDireccionController } from '../direccion_dependencies';
import { readDireccionByIdController } from '../direccion_dependencies';
import { updateDireccionController } from '../direccion_dependencies';

export const router = express.Router();
router.post('/direcciones', createDireccionController.run.bind(createDireccionController));
router.get('/direcciones', readAllDireccionController.run.bind(readAllDireccionController));
router.delete('/direcciones/:id', deleteDireccionController.run.bind(deleteDireccionController));
router.get('/direcciones/:id', readDireccionByIdController.run.bind(readDireccionByIdController));
router.put('/direcciones/:id', updateDireccionController.run.bind(updateDireccionController));

export default router;
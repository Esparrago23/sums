import express from 'express';
import { createEducacionController } from '../educacion_dependencies';
import { readAllEducacionController } from '../educacion_dependencies'; 
import { deleteEducacionController } from '../educacion_dependencies';
import { readEducacionByIdController } from '../educacion_dependencies';
import { updateEducacionController } from '../educacion_dependencies';

export const router = express.Router();
router.post('/educaciones', createEducacionController.run.bind(createEducacionController));
router.get('/educaciones', readAllEducacionController.run.bind(readAllEducacionController));
router.delete('/educaciones/:id', deleteEducacionController.run.bind(deleteEducacionController));
router.get('/educaciones/:id', readEducacionByIdController.run.bind(readEducacionByIdController));
router.put('/educaciones/:id', updateEducacionController.run.bind(updateEducacionController));

export default router;
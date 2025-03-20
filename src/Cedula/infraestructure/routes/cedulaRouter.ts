import express from 'express';
import { createCedulaController } from '../cedula_dependencies';
import { readAllCedulaController } from '../cedula_dependencies';
import { deleteCedulaController } from '../cedula_dependencies';
import { readCedulaByIdController } from '../cedula_dependencies';
import { updateCedulaController } from '../cedula_dependencies';

export const router = express.Router();
router.post('/cedulas', createCedulaController.run.bind(createCedulaController));
router.get('/cedulas', readAllCedulaController.run.bind(readAllCedulaController));
router.delete('/cedulas/:id', deleteCedulaController.run.bind(deleteCedulaController));
router.get('/cedulas/:id', readCedulaByIdController.run.bind(readCedulaByIdController));
router.put('/cedulas/:id', updateCedulaController.run.bind(updateCedulaController));

export default router;
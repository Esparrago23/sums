import express from 'express';
import { createEntrevistadorController } from '../entrevistador_dependencies';
import { readAllEntrevistadorController } from '../entrevistador_dependencies';
import { deleteEntrevistadorController } from '../entrevistador_dependencies';
import { readEntrevistadorByIdController } from '../entrevistador_dependencies';
import { updateEntrevistadorController } from '../entrevistador_dependencies';

export const router = express.Router();
router.post('/entrevistadores', createEntrevistadorController.run.bind(createEntrevistadorController));
router.get('/entrevistadores', readAllEntrevistadorController.run.bind(readAllEntrevistadorController));
router.delete('/entrevistadores/:id', deleteEntrevistadorController.run.bind(deleteEntrevistadorController));
router.get('/entrevistadores/:id', readEntrevistadorByIdController.run.bind(readEntrevistadorByIdController));
router.put('/entrevistadores/:id', updateEntrevistadorController.run.bind(updateEntrevistadorController));

export default router;
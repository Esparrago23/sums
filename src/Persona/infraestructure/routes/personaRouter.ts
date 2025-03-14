import express from 'express';
import { createPersonaController } from '../persona_dependencies';
import { readAllPersonaController } from '../persona_dependencies';
import { deletePersonaController } from '../persona_dependencies';
import { readPersonaByIdController } from '../persona_dependencies';
import { updatePersonaController } from '../persona_dependencies';

export const router = express.Router();
router.post('/personas', createPersonaController.run.bind(createPersonaController));
router.get('/personas', readAllPersonaController.run.bind(readAllPersonaController));
router.delete('/personas/:id', deletePersonaController.run.bind(deletePersonaController));
router.get('/personas/:id', readPersonaByIdController.run.bind(readPersonaByIdController));
router.put('/personas/:id', updatePersonaController.run.bind(updatePersonaController));

export default router;
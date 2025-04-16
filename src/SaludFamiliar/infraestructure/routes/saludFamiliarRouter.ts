import express from 'express';
import { createSaludFamiliarController } from '../saludFamiliar_dependencies';
import { readAllSaludFamiliarController } from '../saludFamiliar_dependencies';
import { deleteSaludFamiliarController } from '../saludFamiliar_dependencies';
import { readSaludFamiliarByIdController } from '../saludFamiliar_dependencies';
import { updateSaludFamiliarController } from '../saludFamiliar_dependencies';

export const router = express.Router();
router.post('/salud-familiar', createSaludFamiliarController.run.bind(createSaludFamiliarController));
router.get('/salud-familiar', readAllSaludFamiliarController.run.bind(readAllSaludFamiliarController));
router.delete('/salud-familiar/:id', deleteSaludFamiliarController.run.bind(deleteSaludFamiliarController));
router.get('/salud-familiar/:id', readSaludFamiliarByIdController.run.bind(readSaludFamiliarByIdController));
router.put('/salud-familiar/:id', updateSaludFamiliarController.run.bind(updateSaludFamiliarController));

export default router;
import express from 'express';
import { createDosisController } from '../dosis_dependencies';
import { readAllDosisController } from '../dosis_dependencies';
import { deleteDosisController } from '../dosis_dependencies';
import { readDosisByIdController } from '../dosis_dependencies';
import { updateDosisController } from '../dosis_dependencies';

export const router = express.Router();

router.post('/dosis', createDosisController.run.bind(createDosisController));
router.get('/dosis', readAllDosisController.run.bind(readAllDosisController));
router.delete('/dosis/:id', deleteDosisController.run.bind(deleteDosisController));
router.get('/dosis/:id', readDosisByIdController.run.bind(readDosisByIdController));
router.put('/dosis/:id', updateDosisController.run.bind(updateDosisController));

export default router;
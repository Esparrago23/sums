import express from 'express';
import { createVacunasController } from '../vacunas_dependencies';
import { readAllVacunasController } from '../vacunas_dependencies';
import { deleteVacunasController } from '../vacunas_dependencies';
import { readVacunasByIdController } from '../vacunas_dependencies';
import { updateVacunasController } from '../vacunas_dependencies';

export const router = express.Router();

router.post('/vacunas', createVacunasController.run.bind(createVacunasController));
router.get('/vacunas', readAllVacunasController.run.bind(readAllVacunasController));
router.delete('/vacunas/:id', deleteVacunasController.run.bind(deleteVacunasController));
router.get('/vacunas/:id', readVacunasByIdController.run.bind(readVacunasByIdController));
router.put('/vacunas/:id', updateVacunasController.run.bind(updateVacunasController));

export default router;
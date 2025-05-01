import express from 'express';
import { createMiembroFamiliaController } from '../miembroFamilia_dependencies';
import { readAllMiembroFamiliaController } from '../miembroFamilia_dependencies';
import { deleteMiembroFamiliaController } from '../miembroFamilia_dependencies';
import { readMiembroFamiliaByIdController } from '../miembroFamilia_dependencies';
import { updateMiembroFamiliaController } from '../miembroFamilia_dependencies';

export const router = express.Router();
router.post('/miembros_familia', createMiembroFamiliaController.run.bind(createMiembroFamiliaController));
router.get('/miembros_familia', readAllMiembroFamiliaController.run.bind(readAllMiembroFamiliaController));
router.delete('/miembros_familia/:id', deleteMiembroFamiliaController.run.bind(deleteMiembroFamiliaController));
router.get('/miembros_familia/:id', readMiembroFamiliaByIdController.run.bind(readMiembroFamiliaByIdController));
router.put('/miembros_familia/:id', updateMiembroFamiliaController.run.bind(updateMiembroFamiliaController));

export default router;
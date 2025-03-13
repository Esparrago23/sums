import express from 'express';
import { createViviendaController } from '../vivienda_dependencies';
import { readAllViviendaController } from '../vivienda_dependencies';
import { deleteViviendaController } from '../vivienda_dependencies';
import { readViviendaByIdController } from '../vivienda_dependencies';
import { updateViviendaController } from '../vivienda_dependencies';

export const router = express.Router();
router.post('/viviendas', createViviendaController.run.bind(createViviendaController));
router.get('/viviendas', readAllViviendaController.run.bind(readAllViviendaController));
router.delete('/viviendas/:id', deleteViviendaController.run.bind(deleteViviendaController));
router.get('/viviendas/:id', readViviendaByIdController.run.bind(readViviendaByIdController));
router.put('/viviendas/:id', updateViviendaController.run.bind(updateViviendaController));

export default router;
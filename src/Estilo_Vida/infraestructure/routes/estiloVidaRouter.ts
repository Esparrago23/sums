import express from 'express';
import { createEstiloVidaController } from '../estiloVida_dependencies';
import { readAllEstiloVidaController } from '../estiloVida_dependencies';
import { deleteEstiloVidaController } from '../estiloVida_dependencies';
import { readEstiloVidaByIdController } from '../estiloVida_dependencies';
import { updateEstiloVidaController } from '../estiloVida_dependencies';

export const router = express.Router();
router.post('/estilos_vida', createEstiloVidaController.run.bind(createEstiloVidaController));
router.get('/estilos_vida', readAllEstiloVidaController.run.bind(readAllEstiloVidaController));
router.delete('/estilos_vida/:id', deleteEstiloVidaController.run.bind(deleteEstiloVidaController));
router.get('/estilos_vida/:id', readEstiloVidaByIdController.run.bind(readEstiloVidaByIdController));
router.put('/estilos_vida/:id', updateEstiloVidaController.run.bind(updateEstiloVidaController));

export default router;
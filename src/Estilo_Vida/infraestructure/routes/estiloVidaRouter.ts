import express from 'express';
import { createEstiloVidaController } from '../estiloVida_dependencies';
import { readAllEstiloVidaController } from '../estiloVida_dependencies';
import { deleteEstiloVidaController } from '../estiloVida_dependencies';
import { readEstiloVidaByIdController } from '../estiloVida_dependencies';
import { updateEstiloVidaController } from '../estiloVida_dependencies';

export const router = express.Router();
router.post('/estilos-vida', createEstiloVidaController.run.bind(createEstiloVidaController));
router.get('/estilos-vida', readAllEstiloVidaController.run.bind(readAllEstiloVidaController));
router.delete('/estilos-vida/:id', deleteEstiloVidaController.run.bind(deleteEstiloVidaController));
router.get('/estilos-vida/:id', readEstiloVidaByIdController.run.bind(readEstiloVidaByIdController));
router.put('/estilos-vida/:id', updateEstiloVidaController.run.bind(updateEstiloVidaController));

export default router;
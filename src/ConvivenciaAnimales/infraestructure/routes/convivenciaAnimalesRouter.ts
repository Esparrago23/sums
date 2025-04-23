import express from 'express';
import { createConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';
import { readAllConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';
import { deleteConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';
import { readConvivenciaAnimalesByIdController } from '../convivenciaAnimales_dependencies';
import { updateConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';

export const router = express.Router();
router.post('/convivencia-animales', createConvivenciaAnimalesController.run.bind(createConvivenciaAnimalesController));
router.get('/convivencia-animales', readAllConvivenciaAnimalesController.run.bind(readAllConvivenciaAnimalesController));
router.delete('/convivencia-animales/:id', deleteConvivenciaAnimalesController.run.bind(deleteConvivenciaAnimalesController));
router.get('/convivencia-animales/:id', readConvivenciaAnimalesByIdController.run.bind(readConvivenciaAnimalesByIdController));
router.put('/convivencia-animales/:id', updateConvivenciaAnimalesController.run.bind(updateConvivenciaAnimalesController));

export default router;

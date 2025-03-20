import  express  from "express";
import { createConvivencia_Controller } from "../convivencia_animales_dependencies";
import { readAllConvivencia_Controller } from "../convivencia_animales_dependencies";
import { deleteConvivencia_Controller } from "../convivencia_animales_dependencies";
import { readConvivenciaById_Controller } from "../convivencia_animales_dependencies";
import { updateConvivencia_Controller } from "../convivencia_animales_dependencies";

export const router = express.Router()
router.post('/convivenciaAnimales', createConvivencia_Controller.run.bind(createConvivencia_Controller))
router.get('/convivenciaAnimales', readAllConvivencia_Controller.run.bind(readAllConvivencia_Controller))
router.delete('/convivenciaAnimales', deleteConvivencia_Controller.run.bind(deleteConvivencia_Controller))
router.get('/convivenciaAnimales/:id', readConvivenciaById_Controller.run.bind(readConvivenciaById_Controller))
router.put('/convivenciaAnimales/:id', updateConvivencia_Controller.run.bind(updateConvivencia_Controller))

export default router
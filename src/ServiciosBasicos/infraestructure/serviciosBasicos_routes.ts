import express from 'express';
import {
  createServiciosBasicosController,
  readAllServiciosBasicosController,
  readServiciosBasicosByIdController,
  updateServiciosBasicosController,
  deleteServiciosBasicosController
} from './serviciosBasicos_dependencies';

const serviciosBasicosRouter = express.Router();

serviciosBasicosRouter.post('/servicios-basicos', (req, res) => {
  createServiciosBasicosController.run(req, res);
});

serviciosBasicosRouter.get('/servicios-basicos', (req, res) => {
  readAllServiciosBasicosController.run(req, res);
});

serviciosBasicosRouter.get('/servicios-basicos/:id', (req, res) => {
  readServiciosBasicosByIdController.run(req, res);
});

serviciosBasicosRouter.put('/servicios-basicos/:id', (req, res) => {
  updateServiciosBasicosController.run(req, res);
});

serviciosBasicosRouter.delete('/servicios-basicos/:id', (req, res) => {
  deleteServiciosBasicosController.run(req, res);
});

export default serviciosBasicosRouter;
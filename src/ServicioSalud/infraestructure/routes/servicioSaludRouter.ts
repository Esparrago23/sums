import express from "express";
import { createServicioSaludController } from "../servicioSalud_dependencies";
import { readAllServicioSaludController } from "../servicioSalud_dependencies";
import { deleteServicioSaludController } from "../servicioSalud_dependencies";
import { readServicioSaludByIdController } from "../servicioSalud_dependencies";
import { updateServicioSaludController } from "../servicioSalud_dependencies";

export const router = express.Router();
router.post(
  "/servicios_salud",
  createServicioSaludController.run.bind(createServicioSaludController)
);
router.get(
  "/servicios_salud",
  readAllServicioSaludController.run.bind(readAllServicioSaludController)
);
router.delete(
  "/servicios_salud/:id",
  deleteServicioSaludController.run.bind(deleteServicioSaludController)
);
router.get(
  "/servicios_salud/:id",
  readServicioSaludByIdController.run.bind(readServicioSaludByIdController)
);
router.put(
  "/servicios_salud/:id",
  updateServicioSaludController.run.bind(updateServicioSaludController)
);

export default router;

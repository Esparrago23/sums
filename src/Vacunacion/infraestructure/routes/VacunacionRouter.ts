import express from "express";
import { createVacunasController } from "../../vacunas_dependencies";
import { readVacunasByIdController } from "../../vacunas_dependencies";
import { readAllVacunasController } from "../../vacunas_dependencies";
import { deleteVacunasController } from "../../vacunas_dependencies";
import { updateVacunasController } from "../../vacunas_dependencies";

export const router = express.Router();
router.post("/vacunaciones",createVacunasController.run.bind(createVacunasController));
router.get("/vacunaciones",readAllVacunasController.run.bind(readAllVacunasController));
router.delete("/vacunaciones/:id",deleteVacunasController.run.bind(deleteVacunasController));
router.get("/vacunaciones/:id",readVacunasByIdController.run.bind(readVacunasByIdController));
router.put("/vacunaciones/:id",updateVacunasController.run.bind(updateVacunasController));

export default router;

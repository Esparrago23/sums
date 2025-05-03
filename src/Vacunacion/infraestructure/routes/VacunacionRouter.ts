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
/**
 * @swagger
 * /vacunaciones:
 *   post:
 *     summary: Crear un nuevo registro de vacunación
 *     tags: [Vacunacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vacunacion'
 *     responses:
 *       201:
 *         description: Registro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vacunacion'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los registros de vacunación
 *     tags: [Vacunacion]
 *     responses:
 *       200:
 *         description: Lista de vacunaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vacunacion'

 * /vacunaciones/{id}:
 *   get:
 *     summary: Obtener registro de vacunación por ID
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vacunacion'
 *       404:
 *         description: No encontrado

 *   put:
 *     summary: Actualizar un registro de vacunación
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vacunacion'
 *     responses:
 *       200:
 *         description: Actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vacunacion'
 *       404:
 *         description: No encontrado

 *   delete:
 *     summary: Eliminar un registro de vacunación
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Eliminado correctamente
 *       404:
 *         description: No encontrado
 */

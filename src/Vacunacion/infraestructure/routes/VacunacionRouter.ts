import express from "express";
import { createVacunasController } from "../../vacunas_dependencies";
import { readVacunasByIdController } from "../../vacunas_dependencies";
import { readAllVacunasController } from "../../vacunas_dependencies";
import { deleteVacunasController } from "../../vacunas_dependencies";
import { updateVacunasController } from "../../vacunas_dependencies";
import {getAplicacionesPorAnioVacunaController, getDosisAplicadasPorPersonaController,getVacunacionPorVacunaController ,getAplicacionesPorVacunaYDosisController, getPersonasVacunadasPorVacunaController, getVacunacionPorRangoEdadController, getVacunacionPorSexoController} from "../../vacunas_dependencies";

getVacunacionPorSexoController
export const router = express.Router();
// Total de aplicaciones por tipo de vacuna y dosis
router.get("/vacunaciones/por-vacuna-dosis", getAplicacionesPorVacunaYDosisController.run.bind(getAplicacionesPorVacunaYDosisController));

// Aplicaciones por tipo de vacuna y dosis para una persona específica
router.get("/vacunaciones/por-persona/:persona_id", getVacunacionPorVacunaController.run.bind(getVacunacionPorVacunaController));

// Número de personas vacunadas por cada vacuna (sin repetir persona)
router.get("/vacunaciones/personas-por-vacuna", getPersonasVacunadasPorVacunaController.run.bind(getPersonasVacunadasPorVacunaController));

// Aplicaciones por año y tipo de vacuna
router.get("/vacunaciones/por-anio", getAplicacionesPorAnioVacunaController.run.bind(getAplicacionesPorAnioVacunaController));

// Vacunación segmentada por sexo
router.get("/vacunaciones/por-sexo/:sexo", getVacunacionPorSexoController.run.bind(getVacunacionPorSexoController));

// Vacunación por rangos de edad (0-17, 18-49, 50+)
router.get("/vacunaciones/por-rango-edad", getVacunacionPorRangoEdadController.run.bind(getVacunacionPorRangoEdadController));

// Total de dosis aplicadas por persona (historial/resumen individual)
router.get("/vacunaciones/dosis-por-persona", getDosisAplicadasPorPersonaController.run.bind(getDosisAplicadasPorPersonaController));

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
 *     tags: [Vacunaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vacunacion'
 *     responses:
 *       201:
 *         description: Registro de vacunación creado exitosamente
 *       400:
 *         description: Datos inválidos
 *
 *   get:
 *     summary: Obtener todos los registros de vacunación
 *     tags: [Vacunaciones]
 *     responses:
 *       200:
 *         description: Lista de registros de vacunación
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vacunacion'
 *
 * /vacunaciones/{id}:
 *   get:
 *     summary: Obtener registro de vacunación por ID
 *     tags: [Vacunaciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado
 *       404:
 *         description: No encontrado
 *
 *   put:
 *     summary: Actualizar un registro de vacunación
 *     tags: [Vacunaciones]
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
 *         description: Registro actualizado
 *       404:
 *         description: No encontrado
 *
 *   delete:
 *     summary: Eliminar un registro de vacunación
 *     tags: [Vacunaciones]
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
 *
 * /vacunaciones/por-vacuna-dosis:
 *   get:
 *     summary: Obtener total de aplicaciones por tipo de vacuna y dosis
 *     tags: [Vacunaciones]
 *     responses:
 *       200:
 *         description: Lista de aplicaciones por vacuna y dosis
 *
 * /vacunaciones/por-persona/{persona_id}:
 *   get:
 *     summary: Obtener aplicaciones por vacuna y dosis para una persona
 *     tags: [Vacunaciones]
 *     parameters:
 *       - in: path
 *         name: persona_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de aplicaciones de la persona
 *
 * /vacunaciones/personas-por-vacuna:
 *   get:
 *     summary: Obtener número de personas vacunadas por cada vacuna
 *     tags: [Vacunaciones]
 *     responses:
 *       200:
 *         description: Estadísticas de personas vacunadas
 *
 * /vacunaciones/por-anio:
 *   get:
 *     summary: Obtener aplicaciones por año y tipo de vacuna
 *     tags: [Vacunaciones]
 *     responses:
 *       200:
 *         description: Estadísticas anuales de vacunación
 *
 * /vacunaciones/por-sexo/{sexo}:
 *   get:
 *     summary: Obtener vacunación segmentada por sexo
 *     tags: [Vacunaciones]
 *     parameters:
 *       - in: path
 *         name: sexo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Estadísticas de vacunación por sexo
 *
 * /vacunaciones/por-rango-edad:
 *   get:
 *     summary: Obtener vacunación por rangos de edad
 *     tags: [Vacunaciones]
 *     responses:
 *       200:
 *         description: Estadísticas de vacunación por rango de edad
 *
 * /vacunaciones/dosis-por-persona:
 *   get:
 *     summary: Obtener total de dosis aplicadas por persona
 *     tags: [Vacunaciones]
 *     responses:
 *       200:
 *         description: Historial de dosis por persona
 */
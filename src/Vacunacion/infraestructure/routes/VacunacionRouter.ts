import express from "express";
import { createVacunasController } from "../../vacunas_dependencies";
import { readVacunasByIdController } from "../../vacunas_dependencies";
import { readAllVacunasController } from "../../vacunas_dependencies";
import { deleteVacunasController } from "../../vacunas_dependencies";
import { updateVacunasController } from "../../vacunas_dependencies";
import {getAplicacionesPorAnioVacunaController, getDosisAplicadasPorPersonaController,getVacunacionPorVacunaController ,getAplicacionesPorVacunaYDosisController, getPersonasVacunadasPorVacunaController, getVacunacionPorRangoEdadController, getVacunacionPorSexoController} from "../../vacunas_dependencies";

getVacunacionPorSexoController
export const router = express.Router();
router.post("/vacunaciones",createVacunasController.run.bind(createVacunasController));
router.get("/vacunaciones",readAllVacunasController.run.bind(readAllVacunasController));
router.delete("/vacunaciones/:id",deleteVacunasController.run.bind(deleteVacunasController));
router.get("/vacunaciones/:id",readVacunasByIdController.run.bind(readVacunasByIdController));
router.put("/vacunaciones/:id",updateVacunasController.run.bind(updateVacunasController));
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


export default router;
/**
 * @swagger
 * /vacunaciones/por_anio/{anio}:
 *   get:
 *     summary: Obtener aplicaciones de vacunas por año
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: anio
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de aplicaciones por año
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vacunacion'
 *       400:
 *         description: Error en la consulta
 *
 * /vacunaciones/por_vacuna/{vacuna_id}:
 *   get:
 *     summary: Obtener vacunaciones por tipo de vacuna
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: vacuna_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de vacunaciones por tipo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vacunacion'
 *
 * /vacunaciones/por_vacuna_dosis/{vacuna_id}/{dosis_id}:
 *   get:
 *     summary: Obtener aplicaciones por vacuna y dosis
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: vacuna_id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: dosis_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de aplicaciones por vacuna y dosis
 *
 * /vacunaciones/por_persona/{persona_id}:
 *   get:
 *     summary: Obtener dosis aplicadas por persona
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: persona_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de dosis aplicadas
 *
 * /vacunaciones/por_persona_vacuna/{persona_id}/{vacuna_id}:
 *   get:
 *     summary: Obtener vacunaciones por persona y tipo de vacuna
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: persona_id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: vacuna_id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de vacunaciones específicas
 *
 * /vacunaciones/por_rango_edad/{edad_min}/{edad_max}:
 *   get:
 *     summary: Obtener vacunaciones por rango de edad
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: edad_min
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: edad_max
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de vacunaciones por rango de edad
 *
 * /vacunaciones/por_sexo/{sexo}:
 *   get:
 *     summary: Obtener vacunaciones por sexo
 *     tags: [Vacunacion]
 *     parameters:
 *       - in: path
 *         name: sexo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de vacunaciones por sexo
 *
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

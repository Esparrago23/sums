import express from 'express';
import { createCedulaController } from '../cedula_dependencies';
import { readAllCedulaController } from '../cedula_dependencies';
import { deleteCedulaController } from '../cedula_dependencies';
import { readCedulaByIdController } from '../cedula_dependencies';
import { updateCedulaController } from '../cedula_dependencies';

/**
 * @swagger
 * components:
 *   schemas:
 *     Cedula:
 *       type: object
 *       required:
 *         - id
 *         - unidad_salud_id
 *         - entrevistador_id
 *         - familia_id
 *         - esquema_vacunacion_id
 *         - composicion_familiar_id
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único de la cédula
 *         unidad_salud_id:
 *           type: integer
 *           description: ID de la unidad de salud asociada
 *         entrevistador_id:
 *           type: integer
 *           description: ID del entrevistador asignado
 *         familia_id:
 *           type: integer
 *           description: ID de la familia relacionada
 *         esquema_vacunacion_id:
 *           type: integer
 *           description: ID del esquema de vacunación
 *         composicion_familiar_id:
 *           type: integer
 *           description: ID de la composición familiar
 */

/**
 * @swagger
 * /cedulas:
 *   post:
 *     summary: Crear una nueva cédula
 *     tags: [Cedulas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cedula'
 *     responses:
 *       201:
 *         description: Cédula creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 *   get:
 *     summary: Obtener todas las cédulas
 *     tags: [Cedulas]
 *     responses:
 *       200:
 *         description: Lista de cédulas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cedula'
 */

/**
 * @swagger
 * /cedulas/{id}:
 *   get:
 *     summary: Obtener una cédula por ID
 *     tags: [Cedulas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cédula
 *     responses:
 *       200:
 *         description: Cédula encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cedula'
 *       404:
 *         description: Cédula no encontrada
 *   put:
 *     summary: Actualizar una cédula
 *     tags: [Cedulas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cédula
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cedula'
 *     responses:
 *       200:
 *         description: Cédula actualizada
 *       404:
 *         description: Cédula no encontrada
 *   delete:
 *     summary: Eliminar una cédula
 *     tags: [Cedulas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la cédula
 *     responses:
 *       200:
 *         description: Cédula eliminada
 *       404:
 *         description: Cédula no encontrada
 */

export const router = express.Router();
router.post('/cedulas', createCedulaController.run.bind(createCedulaController));
router.get('/cedulas', readAllCedulaController.run.bind(readAllCedulaController));
router.delete('/cedulas/:id', deleteCedulaController.run.bind(deleteCedulaController));
router.get('/cedulas/:id', readCedulaByIdController.run.bind(readCedulaByIdController));
router.put('/cedulas/:id', updateCedulaController.run.bind(updateCedulaController));

export default router;
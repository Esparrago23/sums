import express from 'express';
import { createDosisController } from '../dosis_dependencies';
import { readAllDosisController } from '../dosis_dependencies';
import { deleteDosisController } from '../dosis_dependencies';
import { readDosisByIdController } from '../dosis_dependencies';
import { updateDosisController } from '../dosis_dependencies';



/**
 * @swagger
 * tags:
 *   name: Dosis
 *   description: Gestión de dosis de vacunas
 */

/**
 * @swagger
 * /dosis:
 *   post:
 *     summary: Crear una nueva dosis
 *     tags: [Dosis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dosis'
 *     responses:
 *       201:
 *         description: Dosis creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 *   get:
 *     summary: Obtener todas las dosis
 *     tags: [Dosis]
 *     responses:
 *       200:
 *         description: Lista de dosis
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dosis'
 */

/**
 * @swagger
 * /dosis/{id}:
 *   get:
 *     summary: Obtener dosis por ID
 *     tags: [Dosis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dosis
 *     responses:
 *       200:
 *         description: Dosis encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dosis'
 *       404:
 *         description: Dosis no encontrada
 *   put:
 *     summary: Actualizar dosis
 *     tags: [Dosis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dosis
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dosis'
 *     responses:
 *       200:
 *         description: Dosis actualizada
 *       404:
 *         description: Dosis no encontrada
 *   delete:
 *     summary: Eliminar dosis
 *     tags: [Dosis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dosis
 *     responses:
 *       200:
 *         description: Dosis eliminada
 *       404:
 *         description: Dosis no encontrada
 */

export const router = express.Router();

router.post('/dosis', createDosisController.run.bind(createDosisController));
router.get('/dosis', readAllDosisController.run.bind(readAllDosisController));
router.delete('/dosis/:id', deleteDosisController.run.bind(deleteDosisController));
router.get('/dosis/:id', readDosisByIdController.run.bind(readDosisByIdController));
router.put('/dosis/:id', updateDosisController.run.bind(updateDosisController));

export default router;
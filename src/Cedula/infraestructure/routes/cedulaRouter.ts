/**
 * @swagger
 * /api/cedulas:
 *   post:
 *     summary: Create a new cedula
 *     tags: [Cedulas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cedula'
 *     responses:
 *       201:
 *         description: Cedula created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cedula'
 *       400:
 *         description: Invalid input data
 * 
 *   get:
 *     summary: Get all cedulas
 *     tags: [Cedulas]
 *     responses:
 *       200:
 *         description: List of all cedulas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cedula'
 * 
 * /api/cedulas/{id}:
 *   get:
 *     summary: Get a cedula by ID
 *     tags: [Cedulas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the cedula
 *     responses:
 *       200:
 *         description: Cedula found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cedula'
 *       404:
 *         description: Cedula not found
 * 
 *   put:
 *     summary: Update a cedula
 *     tags: [Cedulas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the cedula to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cedula'
 *     responses:
 *       200:
 *         description: Cedula updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cedula'
 *       404:
 *         description: Cedula not found
 * 
 *   delete:
 *     summary: Delete a cedula
 *     tags: [Cedulas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the cedula to delete
 *     responses:
 *       200:
 *         description: Cedula deleted successfully
 *       404:
 *         description: Cedula not found
 */

import express from 'express';
import { createCedulaController } from '../cedula_dependencies';
import { readAllCedulaController } from '../cedula_dependencies';
import { deleteCedulaController } from '../cedula_dependencies';
import { readCedulaByIdController } from '../cedula_dependencies';
import { updateCedulaController } from '../cedula_dependencies';

export const router = express.Router();
router.post('/cedulas', createCedulaController.run.bind(createCedulaController));
router.get('/cedulas', readAllCedulaController.run.bind(readAllCedulaController));
router.delete('/cedulas/:id', deleteCedulaController.run.bind(deleteCedulaController));
router.get('/cedulas/:id', readCedulaByIdController.run.bind(readCedulaByIdController));
router.put('/cedulas/:id', updateCedulaController.run.bind(updateCedulaController));

export default router;
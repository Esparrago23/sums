/**
 * @swagger
 * /viviendas:
 *   post:
 *     summary: Create a new housing record
 *     tags: [Viviendas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vivienda'
 *     responses:
 *       201:
 *         description: Housing record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vivienda'
 *       400:
 *         description: Invalid input data
 * 
 *   get:
 *     summary: Get all housing records
 *     tags: [Viviendas]
 *     responses:
 *       200:
 *         description: List of all housing records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vivienda'
 * 
 * /viviendas/{id}:
 *   get:
 *     summary: Get a housing record by ID
 *     tags: [Viviendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the housing record
 *     responses:
 *       200:
 *         description: Housing record found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vivienda'
 *       404:
 *         description: Housing record not found
 * 
 *   put:
 *     summary: Update a housing record
 *     tags: [Viviendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the housing record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vivienda'
 *     responses:
 *       200:
 *         description: Housing record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vivienda'
 *       404:
 *         description: Housing record not found
 * 
 *   delete:
 *     summary: Delete a housing record
 *     tags: [Viviendas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the housing record to delete
 *     responses:
 *       200:
 *         description: Housing record deleted successfully
 *       404:
 *         description: Housing record not found
 */

import express from 'express';
import { createViviendaController } from '../vivienda_dependencies';
import { readAllViviendaController } from '../vivienda_dependencies';
import { deleteViviendaController } from '../vivienda_dependencies';
import { readViviendaByIdController } from '../vivienda_dependencies';
import { updateViviendaController } from '../vivienda_dependencies';

export const router = express.Router();
router.post('/viviendas', createViviendaController.run.bind(createViviendaController));
router.get('/viviendas', readAllViviendaController.run.bind(readAllViviendaController));
router.delete('/viviendas/:id', deleteViviendaController.run.bind(deleteViviendaController));
router.get('/viviendas/:id', readViviendaByIdController.run.bind(readViviendaByIdController));
router.put('/viviendas/:id', updateViviendaController.run.bind(updateViviendaController));

export default router;

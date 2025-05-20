/**
 * @swagger
 * /servicios-basicos:
 *   post:
 *     summary: Create a new basic services record
 *     tags: [ServiciosBasicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiciosBasicos'
 *     responses:
 *       201:
 *         description: Basic services record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiciosBasicos'
 *       400:
 *         description: Invalid input data
 * 
 *   get:
 *     summary: Get all basic services records
 *     tags: [ServiciosBasicos]
 *     responses:
 *       200:
 *         description: List of all basic services records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ServiciosBasicos'
 * 
 * /servicios-basicos/{id}:
 *   get:
 *     summary: Get a basic services record by ID
 *     tags: [ServiciosBasicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the basic services record
 *     responses:
 *       200:
 *         description: Basic services record found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiciosBasicos'
 *       404:
 *         description: Record not found
 * 
 *   put:
 *     summary: Update a basic services record
 *     tags: [ServiciosBasicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the basic services record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiciosBasicos'
 *     responses:
 *       200:
 *         description: Basic services record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiciosBasicos'
 *       404:
 *         description: Record not found
 * 
 *   delete:
 *     summary: Delete a basic services record
 *     tags: [ServiciosBasicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the basic services record to delete
 *     responses:
 *       200:
 *         description: Basic services record deleted successfully
 *       404:
 *         description: Record not found
 */

import express from 'express';
import { createServiciosBasicosController} from "../serviciosBasicos_dependencies";
import { readAllServiciosBasicosController } from '../serviciosBasicos_dependencies';
import { readServiciosBasicosByIdController } from '../serviciosBasicos_dependencies';
import { updateServiciosBasicosController } from '../serviciosBasicos_dependencies';
import { deleteServiciosBasicosController } from '../serviciosBasicos_dependencies';

export const router = express.Router();
router.post('/servicios-basicos', createServiciosBasicosController.run.bind(createServiciosBasicosController));
router.get('/servicios-basicos', readAllServiciosBasicosController.run.bind(readAllServiciosBasicosController));
router.get('/servicios-basicos/:id', readServiciosBasicosByIdController.run.bind(readServiciosBasicosByIdController));
router.put('/servicios-basicos/:id', updateServiciosBasicosController.run.bind(updateServiciosBasicosController));
router.delete('/servicios-basicos/:id', deleteServiciosBasicosController.run.bind(deleteServiciosBasicosController));

export default router;

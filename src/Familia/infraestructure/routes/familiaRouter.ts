/**
 * @swagger
 * /api/familias:
 *   post:
 *     summary: Create a new family record
 *     tags: [Familias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Familia'
 *     responses:
 *       201:
 *         description: Family record created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Familia'
 *       400:
 *         description: Invalid input data
 * 
 *   get:
 *     summary: Get all family records
 *     tags: [Familias]
 *     responses:
 *       200:
 *         description: List of all family records
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Familia'
 * 
 * /api/familias/{id}:
 *   get:
 *     summary: Get a family record by ID
 *     tags: [Familias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the family record
 *     responses:
 *       200:
 *         description: Family record found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Familia'
 *       404:
 *         description: Family record not found
 * 
 *   put:
 *     summary: Update a family record
 *     tags: [Familias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the family record to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Familia'
 *     responses:
 *       200:
 *         description: Family record updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Familia'
 *       404:
 *         description: Family record not found
 * 
 *   delete:
 *     summary: Delete a family record
 *     tags: [Familias]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the family record to delete
 *     responses:
 *       200:
 *         description: Family record deleted successfully
 *       404:
 *         description: Family record not found
 */

import express from 'express';
import { createFamiliaController } from '../familia_dependencies';
import { readAllFamiliaController } from '../familia_dependencies';
import { deleteFamiliaController } from '../familia_dependencies';
import { readFamiliaByIdController } from '../familia_dependencies';
import { updateFamiliaController } from '../familia_dependencies';



export const router = express.Router();
router.post('/familias', createFamiliaController.run.bind(createFamiliaController));
router.get('/familias', readAllFamiliaController.run.bind(readAllFamiliaController));
router.delete('/familias/:id', deleteFamiliaController.run.bind(deleteFamiliaController));
router.get('/familias/:id', readFamiliaByIdController.run.bind(readFamiliaByIdController));
router.put('/familias/:id', updateFamiliaController.run.bind(updateFamiliaController));

export default router;

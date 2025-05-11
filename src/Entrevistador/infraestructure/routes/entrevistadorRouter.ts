/**
 * @swagger
 * /api/entrevistadores:
 *   post:
 *     summary: Create a new interviewer
 *     tags: [Entrevistadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entrevistador'
 *     responses:
 *       201:
 *         description: Interviewer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrevistador'
 *       400:
 *         description: Invalid input data
 * 
 *   get:
 *     summary: Get all interviewers
 *     tags: [Entrevistadores]
 *     responses:
 *       200:
 *         description: List of all interviewers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entrevistador'
 * 
 * /api/entrevistadores/{id}:
 *   get:
 *     summary: Get an interviewer by ID
 *     tags: [Entrevistadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the interviewer
 *     responses:
 *       200:
 *         description: Interviewer found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrevistador'
 *       404:
 *         description: Interviewer not found
 * 
 *   put:
 *     summary: Update an interviewer
 *     tags: [Entrevistadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the interviewer to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entrevistador'
 *     responses:
 *       200:
 *         description: Interviewer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrevistador'
 *       404:
 *         description: Interviewer not found
 * 
 *   delete:
 *     summary: Delete an interviewer
 *     tags: [Entrevistadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the interviewer to delete
 *     responses:
 *       200:
 *         description: Interviewer deleted successfully
 *       404:
 *         description: Interviewer not found
 */

import express from 'express';
import { createEntrevistadorController } from '../entrevistador_dependencies';
import { readAllEntrevistadorController } from '../entrevistador_dependencies';
import { deleteEntrevistadorController } from '../entrevistador_dependencies';
import { readEntrevistadorByIdController } from '../entrevistador_dependencies';
import { updateEntrevistadorController } from '../entrevistador_dependencies';

export const router = express.Router();
router.post('/entrevistadores', createEntrevistadorController.run.bind(createEntrevistadorController));
router.get('/entrevistadores', readAllEntrevistadorController.run.bind(readAllEntrevistadorController));
router.delete('/entrevistadores/:id', deleteEntrevistadorController.run.bind(deleteEntrevistadorController));
router.get('/entrevistadores/:id', readEntrevistadorByIdController.run.bind(readEntrevistadorByIdController));
router.put('/entrevistadores/:id', updateEntrevistadorController.run.bind(updateEntrevistadorController));

export default router;

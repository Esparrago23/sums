/**
 * @swagger
 * /roles:
 *   post:
 *     summary: Create a new interviewer
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       201:
 *         description: Interviewer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       400:
 *         description: Invalid input data
 * 
 *   get:
 *     summary: Get all interviewers
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: List of all interviewers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rol'
 * 
 * /roles/{id}:
 *   get:
 *     summary: Get an interviewer by ID
 *     tags: [Roles]
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
 *               $ref: '#/components/schemas/Rol'
 *       404:
 *         description: Interviewer not found
 * 
 *   put:
 *     summary: Update an interviewer
 *     tags: [Roles]
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
 *             $ref: '#/components/schemas/Rol'
 *     responses:
 *       200:
 *         description: Interviewer updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rol'
 *       404:
 *         description: Interviewer not found
 * 
 *   delete:
 *     summary: Delete an interviewer
 *     tags: [Roles]
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
router.post('/roles', createEntrevistadorController.run.bind(createEntrevistadorController));
router.get('/roles', readAllEntrevistadorController.run.bind(readAllEntrevistadorController));
router.delete('/roles/:id', deleteEntrevistadorController.run.bind(deleteEntrevistadorController));
router.get('/roles/:id', readEntrevistadorByIdController.run.bind(readEntrevistadorByIdController));
router.put('/roles/:id', updateEntrevistadorController.run.bind(updateEntrevistadorController));

export default router;

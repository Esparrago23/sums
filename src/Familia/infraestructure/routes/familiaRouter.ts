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
/**
 * @swagger
 * /familias:
 *   post:
 *     summary: Crear una nueva familia
 *     tags: [Familias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Familia'
 *     responses:
 *       201:
 *         description: Familia creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Familia'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todas las familias
 *     tags: [Familias]
 *     responses:
 *       200:
 *         description: Lista de familias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Familia'

 * /familias/{id}:
 *   get:
 *     summary: Obtener familia por ID
 *     tags: [Familias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Familia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Familia'
 *       404:
 *         description: Familia no encontrada

 *   put:
 *     summary: Actualizar una familia
 *     tags: [Familias]
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
 *             $ref: '#/components/schemas/Familia'
 *     responses:
 *       200:
 *         description: Familia actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Familia'
 *       404:
 *         description: Familia no encontrada

 *   delete:
 *     summary: Eliminar una familia
 *     tags: [Familias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Familia eliminada
 *       404:
 *         description: Familia no encontrada
 */

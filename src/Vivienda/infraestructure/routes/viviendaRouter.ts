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
/**
 * @swagger
 * /viviendas:
 *   post:
 *     summary: Crear una nueva vivienda
 *     tags: [Vivienda]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vivienda'
 *     responses:
 *       201:
 *         description: Vivienda creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vivienda'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todas las viviendas
 *     tags: [Vivienda]
 *     responses:
 *       200:
 *         description: Lista de viviendas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vivienda'

 * /viviendas/{id}:
 *   get:
 *     summary: Obtener vivienda por ID
 *     tags: [Vivienda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vivienda encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vivienda'
 *       404:
 *         description: No encontrado

 *   put:
 *     summary: Actualizar una vivienda existente
 *     tags: [Vivienda]
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
 *             $ref: '#/components/schemas/Vivienda'
 *     responses:
 *       200:
 *         description: Vivienda actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vivienda'
 *       404:
 *         description: No encontrado

 *   delete:
 *     summary: Eliminar una vivienda
 *     tags: [Vivienda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Eliminada correctamente
 *       404:
 *         description: No encontrado
 */

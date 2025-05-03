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

/**
 * @swagger
 * /entrevistadores:
 *   post:
 *     summary: Crear un nuevo entrevistador
 *     tags: [Entrevistadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entrevistador'
 *     responses:
 *       201:
 *         description: Entrevistador creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrevistador'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los entrevistadores
 *     tags: [Entrevistadores]
 *     responses:
 *       200:
 *         description: Lista de entrevistadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entrevistador'

 * /entrevistadores/{id}:
 *   get:
 *     summary: Obtener entrevistador por ID
 *     tags: [Entrevistadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Entrevistador encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrevistador'
 *       404:
 *         description: Entrevistador no encontrado

 *   put:
 *     summary: Actualizar un entrevistador
 *     tags: [Entrevistadores]
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
 *             $ref: '#/components/schemas/Entrevistador'
 *     responses:
 *       200:
 *         description: Entrevistador actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrevistador'
 *       404:
 *         description: Entrevistador no encontrado

 *   delete:
 *     summary: Eliminar un entrevistador
 *     tags: [Entrevistadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Entrevistador eliminado
 *       404:
 *         description: Entrevistador no encontrado
 */

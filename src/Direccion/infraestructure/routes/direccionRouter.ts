import express from 'express';
import { createDireccionController } from '../direccion_dependencies';
import { readAllDireccionController } from '../direccion_dependencies';
import { deleteDireccionController } from '../direccion_dependencies';
import { readDireccionByIdController } from '../direccion_dependencies';
import { updateDireccionController } from '../direccion_dependencies';

/**
 * @swagger
 * tags:
 *   name: Direcciones
 *   description: Gestión de direcciones
 */

/**
 * @swagger
 * /direcciones:
 *   post:
 *     summary: Crear una nueva dirección
 *     tags: [Direcciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Direccion'
 *     responses:
 *       201:
 *         description: Dirección creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 *   get:
 *     summary: Obtener todas las direcciones
 *     tags: [Direcciones]
 *     responses:
 *       200:
 *         description: Lista de direcciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Direccion'
 */

/**
 * @swagger
 * /direcciones/{id}:
 *   get:
 *     summary: Obtener dirección por ID
 *     tags: [Direcciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dirección
 *     responses:
 *       200:
 *         description: Dirección encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Direccion'
 *       404:
 *         description: Dirección no encontrada
 *   put:
 *     summary: Actualizar dirección
 *     tags: [Direcciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dirección
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Direccion'
 *     responses:
 *       200:
 *         description: Dirección actualizada
 *       404:
 *         description: Dirección no encontrada
 *   delete:
 *     summary: Eliminar dirección
 *     tags: [Direcciones]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la dirección
 *     responses:
 *       200:
 *         description: Dirección eliminada
 *       404:
 *         description: Dirección no encontrada
 */

export const router = express.Router();
router.post('/direcciones', createDireccionController.run.bind(createDireccionController));
router.get('/direcciones', readAllDireccionController.run.bind(readAllDireccionController));
router.delete('/direcciones/:id', deleteDireccionController.run.bind(deleteDireccionController));
router.get('/direcciones/:id', readDireccionByIdController.run.bind(readDireccionByIdController));
router.put('/direcciones/:id', updateDireccionController.run.bind(updateDireccionController));

export default router;
import express from 'express';
import { createEducacionController } from '../educacion_dependencies';
import { readAllEducacionController } from '../educacion_dependencies'; 
import { deleteEducacionController } from '../educacion_dependencies';
import { readEducacionByIdController } from '../educacion_dependencies';
import { updateEducacionController } from '../educacion_dependencies';

/**
 * @swagger
 * tags:
 *   name: Educacion
 *   description: Gestión de información educativa
 */

/**
 * @swagger
 * /educaciones:
 *   post:
 *     summary: Crear un nuevo registro de educación
 *     tags: [Educacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Educacion'
 *     responses:
 *       201:
 *         description: Registro de educación creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Educacion'
 *   get:
 *     summary: Obtener todos los registros de educación
 *     tags: [Educacion]
 *     responses:
 *       200:
 *         description: Lista de registros de educación
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Educacion'
 */

/**
 * @swagger
 * /educaciones/{id}:
 *   get:
 *     summary: Obtener un registro de educación por ID
 *     tags: [Educacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de educación
 *     responses:
 *       200:
 *         description: Registro de educación encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Educacion'
 *   put:
 *     summary: Actualizar un registro de educación
 *     tags: [Educacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de educación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Educacion'
 *     responses:
 *       200:
 *         description: Registro de educación actualizado
 *   delete:
 *     summary: Eliminar un registro de educación
 *     tags: [Educacion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de educación
 *     responses:
 *       200:
 *         description: Registro de educación eliminado
 */

export const router = express.Router();
router.post('/educaciones', createEducacionController.run.bind(createEducacionController));
router.get('/educaciones', readAllEducacionController.run.bind(readAllEducacionController));
router.delete('/educaciones/:id', deleteEducacionController.run.bind(deleteEducacionController));
router.get('/educaciones/:id', readEducacionByIdController.run.bind(readEducacionByIdController));
router.put('/educaciones/:id', updateEducacionController.run.bind(updateEducacionController));

export default router;
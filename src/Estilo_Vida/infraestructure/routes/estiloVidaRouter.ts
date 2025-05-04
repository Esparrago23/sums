import express from 'express';
import { createEstiloVidaController } from '../estiloVida_dependencies';
import { readAllEstiloVidaController } from '../estiloVida_dependencies';
import { deleteEstiloVidaController } from '../estiloVida_dependencies';
import { readEstiloVidaByIdController } from '../estiloVida_dependencies';
import { updateEstiloVidaController } from '../estiloVida_dependencies';

/**
 * @swagger
 * tags:
 *   name: EstiloVida
 *   description: Gestión de información sobre estilos de vida
 */

/**
 * @swagger
 * /estilos-vida:
 *   post:
 *     summary: Crear un nuevo registro de estilo de vida
 *     tags: [EstiloVida]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EstiloVida'
 *     responses:
 *       201:
 *         description: Registro de estilo de vida creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EstiloVida'
 *   get:
 *     summary: Obtener todos los registros de estilos de vida
 *     tags: [EstiloVida]
 *     responses:
 *       200:
 *         description: Lista de registros de estilos de vida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/EstiloVida'
 */

/**
 * @swagger
 * /estilos-vida/{id}:
 *   get:
 *     summary: Obtener un registro de estilo de vida por ID
 *     tags: [EstiloVida]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de estilo de vida
 *     responses:
 *       200:
 *         description: Registro de estilo de vida encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EstiloVida'
 *   put:
 *     summary: Actualizar un registro de estilo de vida
 *     tags: [EstiloVida]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de estilo de vida
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EstiloVida'
 *     responses:
 *       200:
 *         description: Registro de estilo de vida actualizado
 *   delete:
 *     summary: Eliminar un registro de estilo de vida
 *     tags: [EstiloVida]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro de estilo de vida
 *     responses:
 *       200:
 *         description: Registro de estilo de vida eliminado
 */

export const router = express.Router();
router.post('/estilos-vida', createEstiloVidaController.run.bind(createEstiloVidaController));
router.get('/estilos-vida', readAllEstiloVidaController.run.bind(readAllEstiloVidaController));
router.delete('/estilos-vida/:id', deleteEstiloVidaController.run.bind(deleteEstiloVidaController));
router.get('/estilos-vida/:id', readEstiloVidaByIdController.run.bind(readEstiloVidaByIdController));
router.put('/estilos-vida/:id', updateEstiloVidaController.run.bind(updateEstiloVidaController));

export default router;
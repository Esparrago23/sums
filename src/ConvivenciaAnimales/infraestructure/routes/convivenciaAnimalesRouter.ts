import express from 'express';
import { createConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';
import { readAllConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';
import { deleteConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';
import { readConvivenciaAnimalesByIdController } from '../convivenciaAnimales_dependencies';
import { updateConvivenciaAnimalesController } from '../convivenciaAnimales_dependencies';

export const router = express.Router();

/**
 * @swagger
 * /convivencia-animales:
 *   post:
 *     summary: Crear un nuevo registro de convivencia con animales
 *     tags: [ConvivenciaAnimales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConvivenciaAnimales'
 *     responses:
 *       201:
 *         description: Registro creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
router.post('/convivencia-animales', createConvivenciaAnimalesController.run.bind(createConvivenciaAnimalesController));

/**
 * @swagger
 * /convivencia-animales:
 *   get:
 *     summary: Obtener todos los registros de convivencia con animales
 *     tags: [ConvivenciaAnimales]
 *     responses:
 *       200:
 *         description: Lista de registros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ConvivenciaAnimales'
 */
router.get('/convivencia-animales', readAllConvivenciaAnimalesController.run.bind(readAllConvivenciaAnimalesController));

/**
 * @swagger
 * /convivencia-animales/{id}:
 *   delete:
 *     summary: Eliminar un registro de convivencia con animales
 *     tags: [ConvivenciaAnimales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro
 *     responses:
 *       200:
 *         description: Registro eliminado exitosamente
 *       404:
 *         description: Registro no encontrado
 */
router.delete('/convivencia-animales/:id', deleteConvivenciaAnimalesController.run.bind(deleteConvivenciaAnimalesController));

/**
 * @swagger
 * /convivencia-animales/{id}:
 *   get:
 *     summary: Obtener un registro de convivencia con animales por ID
 *     tags: [ConvivenciaAnimales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro
 *     responses:
 *       200:
 *         description: Registro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ConvivenciaAnimales'
 *       404:
 *         description: Registro no encontrado
 */
router.get('/convivencia-animales/:id', readConvivenciaAnimalesByIdController.run.bind(readConvivenciaAnimalesByIdController));

/**
 * @swagger
 * /convivencia-animales/{id}:
 *   put:
 *     summary: Actualizar un registro de convivencia con animales
 *     tags: [ConvivenciaAnimales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del registro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ConvivenciaAnimales'
 *     responses:
 *       200:
 *         description: Registro actualizado exitosamente
 *       404:
 *         description: Registro no encontrado
 */
router.put('/convivencia-animales/:id', updateConvivenciaAnimalesController.run.bind(updateConvivenciaAnimalesController));

export default router;

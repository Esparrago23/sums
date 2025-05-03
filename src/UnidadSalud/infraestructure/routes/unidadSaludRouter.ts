import express from 'express'
import { createUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { readAllUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { deleteUnidadSalud_Controller } from '../unidadsalud_dependencies'
import { readUnidadSaludById_Controller } from '../unidadsalud_dependencies'
import { updateUnidadSalud_Controller } from '../unidadsalud_dependencies'

export const UnidadSaludRouter = express.Router()
UnidadSaludRouter.post('/unidadSalud', createUnidadSalud_Controller.run.bind(createUnidadSalud_Controller))
UnidadSaludRouter.get('/unidadSalud', readAllUnidadSalud_Controller.run.bind(readAllUnidadSalud_Controller))
UnidadSaludRouter.delete('/unidadSalud', deleteUnidadSalud_Controller.run.bind(deleteUnidadSalud_Controller))
UnidadSaludRouter.get('/unidadSalud/:id', readUnidadSaludById_Controller.run.bind(readUnidadSaludById_Controller))
UnidadSaludRouter.put('/unidadSalud/:id', updateUnidadSalud_Controller.run.bind(updateUnidadSalud_Controller))

export default UnidadSaludRouter
/**
 * @swagger
 * /unidadSalud:
 *   post:
 *     summary: Crear un nuevo registro de unidad de salud
 *     tags: [UnidadSalud]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UnidadSalud'
 *     responses:
 *       201:
 *         description: Registro de unidad de salud creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnidadSalud'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los registros de unidad de salud
 *     tags: [UnidadSalud]
 *     responses:
 *       200:
 *         description: Lista de registros de unidad de salud
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UnidadSalud'

 * /unidadSalud/{id}:
 *   get:
 *     summary: Obtener registro de unidad de salud por ID
 *     tags: [UnidadSalud]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro de unidad de salud encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnidadSalud'
 *       404:
 *         description: Registro no encontrado

 *   put:
 *     summary: Actualizar un registro de unidad de salud
 *     tags: [UnidadSalud]
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
 *             $ref: '#/components/schemas/UnidadSalud'
 *     responses:
 *       200:
 *         description: Registro de unidad de salud actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UnidadSalud'
 *       404:
 *         description: Registro no encontrado

 *   delete:
 *     summary: Eliminar un registro de unidad de salud
 *     tags: [UnidadSalud]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro de unidad de salud eliminado
 *       404:
 *         description: Registro no encontrado
 */

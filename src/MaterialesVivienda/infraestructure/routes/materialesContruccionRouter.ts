import express from 'express';
import { createMaterialesViviendaController } from '../materialesVivienda_dependencies';
import { readAllMaterialesViviendaController } from '../materialesVivienda_dependencies';
import { deleteMaterialesViviendaController } from '../materialesVivienda_dependencies';
import { readMaterialesViviendaByIdController } from '../materialesVivienda_dependencies';
import { updateMaterialesViviendaController } from '../materialesVivienda_dependencies';

export const router = express.Router();
router.post('/materiales_vivienda', createMaterialesViviendaController.run.bind(createMaterialesViviendaController));
router.get('/materiales_vivienda', readAllMaterialesViviendaController.run.bind(readAllMaterialesViviendaController));
router.delete('/materiales_vivienda/:id', deleteMaterialesViviendaController.run.bind(deleteMaterialesViviendaController));
router.get('/materiales_vivienda/:id', readMaterialesViviendaByIdController.run.bind(readMaterialesViviendaByIdController));
router.put('/materiales_vivienda/:id', updateMaterialesViviendaController.run.bind(updateMaterialesViviendaController));

export default router;
/**
 * @swagger
 * /materiales_vivienda:
 *   post:
 *     summary: Crear un nuevo registro de materiales de vivienda
 *     tags: [MaterialesVivienda]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MaterialesVivienda'
 *     responses:
 *       201:
 *         description: Registro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MaterialesVivienda'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los registros de materiales de vivienda
 *     tags: [MaterialesVivienda]
 *     responses:
 *       200:
 *         description: Lista de registros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MaterialesVivienda'

 * /materiales_vivienda/{id}:
 *   get:
 *     summary: Obtener registro de materiales por ID
 *     tags: [MaterialesVivienda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MaterialesVivienda'
 *       404:
 *         description: Registro no encontrado

 *   put:
 *     summary: Actualizar un registro de materiales de vivienda
 *     tags: [MaterialesVivienda]
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
 *             $ref: '#/components/schemas/MaterialesVivienda'
 *     responses:
 *       200:
 *         description: Registro actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MaterialesVivienda'
 *       404:
 *         description: Registro no encontrado

 *   delete:
 *     summary: Eliminar un registro de materiales de vivienda
 *     tags: [MaterialesVivienda]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro eliminado
 *       404:
 *         description: Registro no encontrado
 */

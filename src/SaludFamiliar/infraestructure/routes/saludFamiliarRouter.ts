import express from 'express';
import { createSaludFamiliarController } from '../saludFamiliar_dependencies';
import { readAllSaludFamiliarController } from '../saludFamiliar_dependencies';
import { deleteSaludFamiliarController } from '../saludFamiliar_dependencies';
import { readSaludFamiliarByIdController } from '../saludFamiliar_dependencies';
import { updateSaludFamiliarController } from '../saludFamiliar_dependencies';

export const router = express.Router();
router.post('/salud-familiar', createSaludFamiliarController.run.bind(createSaludFamiliarController));
router.get('/salud-familiar', readAllSaludFamiliarController.run.bind(readAllSaludFamiliarController));
router.delete('/salud-familiar/:id', deleteSaludFamiliarController.run.bind(deleteSaludFamiliarController));
router.get('/salud-familiar/:id', readSaludFamiliarByIdController.run.bind(readSaludFamiliarByIdController));
router.put('/salud-familiar/:id', updateSaludFamiliarController.run.bind(updateSaludFamiliarController));

export default router;
/**
 * @swagger
 * /salud-familiar:
 *   post:
 *     summary: Crear un nuevo registro de salud familiar
 *     tags: [SaludFamiliar]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SaludFamiliar'
 *     responses:
 *       201:
 *         description: Registro de salud familiar creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SaludFamiliar'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los registros de salud familiar
 *     tags: [SaludFamiliar]
 *     responses:
 *       200:
 *         description: Lista de registros de salud familiar
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SaludFamiliar'

 * /salud-familiar/{id}:
 *   get:
 *     summary: Obtener registro de salud familiar por ID
 *     tags: [SaludFamiliar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro de salud familiar encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SaludFamiliar'
 *       404:
 *         description: Registro no encontrado

 *   put:
 *     summary: Actualizar un registro de salud familiar
 *     tags: [SaludFamiliar]
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
 *             $ref: '#/components/schemas/SaludFamiliar'
 *     responses:
 *       200:
 *         description: Registro de salud familiar actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SaludFamiliar'
 *       404:
 *         description: Registro no encontrado

 *   delete:
 *     summary: Eliminar un registro de salud familiar
 *     tags: [SaludFamiliar]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro de salud familiar eliminado
 *       404:
 *         description: Registro no encontrado
 */

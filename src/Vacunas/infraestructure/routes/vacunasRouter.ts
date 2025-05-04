import express from 'express';
import { createVacunasController } from '../vacunas_dependencies';
import { readAllVacunasController } from '../vacunas_dependencies';
import { deleteVacunasController } from '../vacunas_dependencies';
import { readVacunasByIdController } from '../vacunas_dependencies';
import { updateVacunasController } from '../vacunas_dependencies';

export const router = express.Router();

router.post('/vacunas', createVacunasController.run.bind(createVacunasController));
router.get('/vacunas', readAllVacunasController.run.bind(readAllVacunasController));
router.delete('/vacunas/:id', deleteVacunasController.run.bind(deleteVacunasController));
router.get('/vacunas/:id', readVacunasByIdController.run.bind(readVacunasByIdController));
router.put('/vacunas/:id', updateVacunasController.run.bind(updateVacunasController));

export default router;
/**
 * @swagger
 * /vacunas:
 *   post:
 *     summary: Crear una nueva vacuna
 *     tags: [Vacunas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vacunas'
 *     responses:
 *       201:
 *         description: Vacuna creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vacunas'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todas las vacunas
 *     tags: [Vacunas]
 *     responses:
 *       200:
 *         description: Lista de vacunas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vacunas'

 * /vacunas/{id}:
 *   get:
 *     summary: Obtener vacuna por ID
 *     tags: [Vacunas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vacuna encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vacunas'
 *       404:
 *         description: No encontrado

 *   put:
 *     summary: Actualizar una vacuna existente
 *     tags: [Vacunas]
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
 *             $ref: '#/components/schemas/Vacunas'
 *     responses:
 *       200:
 *         description: Vacuna actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vacunas'
 *       404:
 *         description: No encontrado

 *   delete:
 *     summary: Eliminar una vacuna
 *     tags: [Vacunas]
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

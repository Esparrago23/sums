import express from 'express';
import { createMiembroFamiliaController } from '../miembroFamilia_dependencies';
import { readAllMiembroFamiliaController } from '../miembroFamilia_dependencies';
import { deleteMiembroFamiliaController } from '../miembroFamilia_dependencies';
import { readMiembroFamiliaByIdController } from '../miembroFamilia_dependencies';
import { updateMiembroFamiliaController } from '../miembroFamilia_dependencies';

export const router = express.Router();
router.post('/miembros_familia', createMiembroFamiliaController.run.bind(createMiembroFamiliaController));
router.get('/miembros_familia', readAllMiembroFamiliaController.run.bind(readAllMiembroFamiliaController));
router.delete('/miembros_familia/:id', deleteMiembroFamiliaController.run.bind(deleteMiembroFamiliaController));
router.get('/miembros_familia/:id', readMiembroFamiliaByIdController.run.bind(readMiembroFamiliaByIdController));
router.put('/miembros_familia/:id', updateMiembroFamiliaController.run.bind(updateMiembroFamiliaController));

export default router;
/**
 * @swagger
 * /miembros_familia:
 *   post:
 *     summary: Crear un nuevo miembro de la familia
 *     tags: [MiembrosFamilia]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MiembroFamilia'
 *     responses:
 *       201:
 *         description: Miembro de la familia creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MiembroFamilia'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los miembros de la familia
 *     tags: [MiembrosFamilia]
 *     responses:
 *       200:
 *         description: Lista de miembros de la familia
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MiembroFamilia'

 * /miembros_familia/{id}:
 *   get:
 *     summary: Obtener miembro de la familia por ID
 *     tags: [MiembrosFamilia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Miembro de la familia encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MiembroFamilia'
 *       404:
 *         description: Miembro de la familia no encontrado

 *   put:
 *     summary: Actualizar miembro de la familia
 *     tags: [MiembrosFamilia]
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
 *             $ref: '#/components/schemas/MiembroFamilia'
 *     responses:
 *       200:
 *         description: Miembro de la familia actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MiembroFamilia'
 *       404:
 *         description: Miembro de la familia no encontrado

 *   delete:
 *     summary: Eliminar miembro de la familia
 *     tags: [MiembrosFamilia]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Miembro de la familia eliminado
 *       404:
 *         description: Miembro de la familia no encontrado
 */

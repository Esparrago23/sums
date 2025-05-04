import express from 'express';
import { createPersonaController } from '../persona_dependencies';
import { readAllPersonaController } from '../persona_dependencies';
import { deletePersonaController } from '../persona_dependencies';
import { readPersonaByIdController } from '../persona_dependencies';
import { updatePersonaController } from '../persona_dependencies';

export const router = express.Router();
router.post('/personas', createPersonaController.run.bind(createPersonaController));
router.get('/personas', readAllPersonaController.run.bind(readAllPersonaController));
router.delete('/personas/:id', deletePersonaController.run.bind(deletePersonaController));
router.get('/personas/:id', readPersonaByIdController.run.bind(readPersonaByIdController));
router.put('/personas/:id', updatePersonaController.run.bind(updatePersonaController));

export default router;
/**
 * @swagger
 * /personas:
 *   post:
 *     summary: Crear una nueva persona
 *     tags: [Personas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       201:
 *         description: Persona creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los registros de personas
 *     tags: [Personas]
 *     responses:
 *       200:
 *         description: Lista de personas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Persona'

 * /personas/{id}:
 *   get:
 *     summary: Obtener persona por ID
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Persona encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       404:
 *         description: Persona no encontrada

 *   put:
 *     summary: Actualizar persona
 *     tags: [Personas]
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
 *             $ref: '#/components/schemas/Persona'
 *     responses:
 *       200:
 *         description: Persona actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Persona'
 *       404:
 *         description: Persona no encontrada

 *   delete:
 *     summary: Eliminar persona
 *     tags: [Personas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Persona eliminada
 *       404:
 *         description: Persona no encontrada
 */

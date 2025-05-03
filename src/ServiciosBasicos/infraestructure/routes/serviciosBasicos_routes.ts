import express from 'express';
import { createServiciosBasicosController} from "../serviciosBasicos_dependencies";
import { readAllServiciosBasicosController } from '../serviciosBasicos_dependencies';
import { readServiciosBasicosByIdController } from '../serviciosBasicos_dependencies';
import { updateServiciosBasicosController } from '../serviciosBasicos_dependencies';
import { deleteServiciosBasicosController } from '../serviciosBasicos_dependencies';

export const router = express.Router();
router.post('/servicios-basicos', createServiciosBasicosController.run.bind(createServiciosBasicosController));
router.get('/servicios-basicos', readAllServiciosBasicosController.run.bind(readAllServiciosBasicosController));
router.get('/servicios-basicos/:id', readServiciosBasicosByIdController.run.bind(readServiciosBasicosByIdController));
router.put('/servicios-basicos/:id', updateServiciosBasicosController.run.bind(updateServiciosBasicosController));
router.delete('/servicios-basicos/:id', deleteServiciosBasicosController.run.bind(deleteServiciosBasicosController));

export default router;
/**
 * @swagger
 * /servicios-basicos:
 *   post:
 *     summary: Crear un nuevo registro de servicios básicos
 *     tags: [ServiciosBasicos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServiciosBasicos'
 *     responses:
 *       201:
 *         description: Registro de servicios básicos creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiciosBasicos'
 *       400:
 *         description: Datos inválidos

 *   get:
 *     summary: Obtener todos los registros de servicios básicos
 *     tags: [ServiciosBasicos]
 *     responses:
 *       200:
 *         description: Lista de registros de servicios básicos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ServiciosBasicos'

 * /servicios-basicos/{id}:
 *   get:
 *     summary: Obtener registro de servicios básicos por ID
 *     tags: [ServiciosBasicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro de servicios básicos encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiciosBasicos'
 *       404:
 *         description: Registro no encontrado

 *   put:
 *     summary: Actualizar un registro de servicios básicos
 *     tags: [ServiciosBasicos]
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
 *             $ref: '#/components/schemas/ServiciosBasicos'
 *     responses:
 *       200:
 *         description: Registro de servicios básicos actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ServiciosBasicos'
 *       404:
 *         description: Registro no encontrado

 *   delete:
 *     summary: Eliminar un registro de servicios básicos
 *     tags: [ServiciosBasicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Registro de servicios básicos eliminado
 *       404:
 *         description: Registro no encontrado
 */

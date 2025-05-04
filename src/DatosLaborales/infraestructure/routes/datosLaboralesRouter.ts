import express from 'express';
import { createDatosLaboralesController } from '../datosLaborales_dependencies';
import { readAllDatosLaboralesController } from '../datosLaborales_dependencies';
import { deleteDatosLaboralesController } from '../datosLaborales_dependencies';
import { readDatosLaboralesByIdController } from '../datosLaborales_dependencies';
import { updateDatosLaboralesController } from '../datosLaborales_dependencies';

/**
 * @swagger
 * tags:
 *   name: DatosLaborales
 *   description: Gestión de datos laborales
 */

/**
 * @swagger
 * /datos_laborales:
 *   post:
 *     summary: Crear nuevos datos laborales
 *     tags: [DatosLaborales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DatosLaborales'
 *     responses:
 *       201:
 *         description: Datos laborales creados exitosamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 *   get:
 *     summary: Obtener todos los datos laborales
 *     tags: [DatosLaborales]
 *     responses:
 *       200:
 *         description: Lista de datos laborales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DatosLaborales'
 */

/**
 * @swagger
 * /datos_laborales/{id}:
 *   get:
 *     summary: Obtener datos laborales por ID
 *     tags: [DatosLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de los datos laborales
 *     responses:
 *       200:
 *         description: Datos laborales encontrados
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DatosLaborales'
 *       404:
 *         description: Datos laborales no encontrados
 *   put:
 *     summary: Actualizar datos laborales
 *     tags: [DatosLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de los datos laborales
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DatosLaborales'
 *     responses:
 *       200:
 *         description: Datos laborales actualizados
 *       404:
 *         description: Datos laborales no encontrados
 *   delete:
 *     summary: Eliminar datos laborales
 *     tags: [DatosLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de los datos laborales
 *     responses:
 *       200:
 *         description: Datos laborales eliminados
 *       404:
 *         description: Datos laborales no encontrados
 */

export const router = express.Router();
router.post('/datos_laborales', createDatosLaboralesController.run.bind(createDatosLaboralesController));
router.get('/datos_laborales', readAllDatosLaboralesController.run.bind(readAllDatosLaboralesController));
router.delete('/datos_laborales/:id', deleteDatosLaboralesController.run.bind(deleteDatosLaboralesController));
router.get('/datos_laborales/:id', readDatosLaboralesByIdController.run.bind(readDatosLaboralesByIdController));
router.put('/datos_laborales/:id', updateDatosLaboralesController.run.bind(updateDatosLaboralesController));

export default router;
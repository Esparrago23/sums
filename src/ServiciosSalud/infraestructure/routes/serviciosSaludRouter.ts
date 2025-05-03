import express from 'express';
import { 
    createServicioSaludController,
    readAllServicioSaludController,
    deleteServicioSaludController,
    readServicioSaludByIdController,
    updateServicioSaludController,
    agregarVisitaController,
    eliminarVisitaController,
    obtenerVisitasPorTipoController,
    obtenerUltimaVisitaController,
    
} from "../serviciosSalud_dependencies";

export const router = express.Router();

// Rutas básicas de servicios de salud
router.post('/servicios-salud', createServicioSaludController.run.bind(createServicioSaludController));
router.get('/servicios-salud', readAllServicioSaludController.run.bind(readAllServicioSaludController));
router.delete('/servicios-salud/:id', deleteServicioSaludController.run.bind(deleteServicioSaludController));
router.get('/servicios-salud/:id', readServicioSaludByIdController.run.bind(readServicioSaludByIdController));
router.put('/servicios-salud/:id', updateServicioSaludController.run.bind(updateServicioSaludController));

// Rutas para gestión de visitas
router.post('/servicios-salud/:servicioId/visitas', agregarVisitaController.run.bind(agregarVisitaController));
router.delete('/servicios-salud/:servicioId/visitas/:fecha', eliminarVisitaController.run.bind(eliminarVisitaController));
router.get('/servicios-salud/:servicioId/visitas/tipo/:tipo', obtenerVisitasPorTipoController.run.bind(obtenerVisitasPorTipoController));
router.get('/servicios-salud/:servicioId/visitas/ultima', obtenerUltimaVisitaController.run.bind(obtenerUltimaVisitaController));

export default router;
/**
 * @swagger
 * tags:
 *   - name: ServicioSalud
 *     description: Operaciones relacionadas con servicios de salud

 * /servicios-salud:
 *   post:
 *     summary: Crear un nuevo servicio de salud
 *     tags: [ServicioSalud]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServicioSalud'
 *     responses:
 *       201:
 *         description: Servicio creado exitosamente
 *       400:
 *         description: Error en los datos

 *   get:
 *     summary: Obtener todos los servicios de salud
 *     tags: [ServicioSalud]
 *     responses:
 *       200:
 *         description: Lista de servicios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ServicioSalud'

 * /servicios-salud/{id}:
 *   get:
 *     summary: Obtener un servicio de salud por ID
 *     tags: [ServicioSalud]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Servicio encontrado
 *       404:
 *         description: No encontrado

 *   put:
 *     summary: Actualizar un servicio de salud
 *     tags: [ServicioSalud]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ServicioSalud'
 *     responses:
 *       200:
 *         description: Servicio actualizado
 *       404:
 *         description: No encontrado

 *   delete:
 *     summary: Eliminar un servicio de salud
 *     tags: [ServicioSalud]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Eliminado correctamente
 *       404:
 *         description: No encontrado

 * /servicios-salud/{servicioId}/visitas:
 *   post:
 *     summary: Agregar una visita a un servicio de salud
 *     tags: [ServicioSalud]
 *     parameters:
 *       - in: path
 *         name: servicioId
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Visita'
 *     responses:
 *       201:
 *         description: Visita agregada

 * /servicios-salud/{servicioId}/visitas/{fecha}:
 *   delete:
 *     summary: Eliminar una visita por fecha
 *     tags: [ServicioSalud]
 *     parameters:
 *       - in: path
 *         name: servicioId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: fecha
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Visita eliminada

 * /servicios-salud/{servicioId}/visitas/tipo/{tipo}:
 *   get:
 *     summary: Obtener visitas por tipo
 *     tags: [ServicioSalud]
 *     parameters:
 *       - in: path
 *         name: servicioId
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: tipo
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de visitas del tipo especificado

 * /servicios-salud/{servicioId}/visitas/ultima:
 *   get:
 *     summary: Obtener la última visita registrada
 *     tags: [ServicioSalud]
 *     parameters:
 *       - in: path
 *         name: servicioId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Última visita encontrada
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Datos de entrada inválidos
 * 
 * /login:
 *   post:
 *     summary: Autenticar usuario y obtener token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre_usuario
 *               - contrasena
 *             properties:
 *               nombre_usuario:
 *                 type: string
 *               contrasena:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Login exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticación
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: ID del usuario
 *                     nombre_usuario:
 *                       type: string
 *                       description: Nombre de usuario
 *                     rol_id:
 *                       type: integer
 *                       description: ID del rol del usuario
 *                     fecha_registro:
 *                       type: string
 *                       format: date-time
 *                       description: Fecha de registro del usuario
 *                     activo:
 *                       type: boolean
 *                       description: Estado del usuario
 *                     unidad_salud_id:
 *                       type: integer
 *                       description: ID de la unidad de salud
 *                     datos_laborales_id:
 *                       type: integer
 *                       description: ID de los datos laborales
 *       401:
 *         description: Autenticación fallida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Invalid credentials"
 * 
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       401:
 *         description: Unauthorized access
 * 
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: User not found
 *       401:
 *         description: Unauthorized access
 * 
 *   put:
 *     summary: Update a user
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: User not found
 *       401:
 *         description: Unauthorized access
 */

import express from 'express';
import { createUserController, readAllUserController, deleteUserController, 
         readUserByIdController, updateUserController, loginUserController } from '../user_dependencies';


import { authMiddleware } from '../middleware/authMiddleware';

export const router = express.Router();

router.post('/register', createUserController.run.bind(createUserController));
router.post('/login', loginUserController.run.bind(loginUserController));

// Protected routes (authentication required)
router.get('/users', authMiddleware(), readAllUserController.run.bind(readAllUserController));
router.delete('/users/:id', authMiddleware(), deleteUserController.run.bind(deleteUserController));
router.get('/users/:id', authMiddleware(), readUserByIdController.run.bind(readUserByIdController));
router.put('/users/:id', authMiddleware(), updateUserController.run.bind(updateUserController));

export default router;

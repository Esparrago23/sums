import express from 'express';
import { createUserController, readAllUserController, deleteUserController, 
         readUserByIdController, updateUserController, loginUserController } from '../user_dependencies';
import { authMiddleware } from '../middleware/authMiddleware';

export const router = express.Router();

// Public routes (no authentication required)
router.post('/register', createUserController.run.bind(createUserController));
router.post('/login', loginUserController.run.bind(loginUserController));

// Protected routes (authentication required)
router.get('/users', authMiddleware(), readAllUserController.run.bind(readAllUserController));
router.delete('/users/:id', authMiddleware(), deleteUserController.run.bind(deleteUserController));
router.get('/users/:id', authMiddleware(), readUserByIdController.run.bind(readUserByIdController));
router.put('/users/:id', authMiddleware(), updateUserController.run.bind(updateUserController));

export default router;

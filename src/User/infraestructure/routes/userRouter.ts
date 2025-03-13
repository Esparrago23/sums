import express from 'express';
import { createUserController } from '../user_dependencies';
import { readAllUserController } from '../user_dependencies';
import { deleteUserController } from '../user_dependencies';
import { readUserByIdController } from '../user_dependencies';
import { updateUserController } from '../user_dependencies';

export const router = express.Router();
router.post('/register', createUserController.run.bind(createUserController));
router.get('/users', readAllUserController.run.bind(readAllUserController));
router.delete('/users/:id', deleteUserController.run.bind(deleteUserController));
router.get('/users/:id', readUserByIdController.run.bind(readUserByIdController));
router.put('/users/:id', updateUserController.run.bind(updateUserController));

export default router;

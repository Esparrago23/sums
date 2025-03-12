import express from 'express';
import { createUserController } from '../dependencies';
import { readAllUserController } from '../dependencies';
import { deleteUserController } from '../dependencies';
import { readUserByIdController } from '../dependencies';
import { updateUserController } from '../dependencies';

export const router = express.Router();
router.post('/register', createUserController.run.bind(createUserController));
router.get('/users', readAllUserController.run.bind(readAllUserController));
router.delete('/users/:id', deleteUserController.run.bind(deleteUserController));
router.get('/users/:id', readUserByIdController.run.bind(readUserByIdController));
router.put('/users/:id', updateUserController.run.bind(updateUserController));

export default router;

// src/Post/infrastructure/services/dependencies.ts
import { InMemoryUserRepository } from './repositories/inMemoryUserRepository';

import { CreateUserUseCase } from '../application/createUser_UseCase';
import { ReadAllUserUseCase } from '../application/readAllUser_UseCase';
import { DeleteUserUseCase } from '../application/deleteUser_UseCase';
import { ReadUserByIDUseCase } from '../application/readUserById_UseCase';
import { UpdateUserUseCase } from '../application/updateUser_UseCase';

import { CreateUser_Controller } from './controller/createUser_Controller';
import { ReadAllUser_Controller } from './controller/readAllUser_Controller';
import { DeleteUser_Controller } from './controller/deleteUser_Controller';
import { ReadUserById_Controller } from './controller/readUserById_Controller';
import { UpdateUser_Controller } from './controller/updateUser_Controller';

import { hashPassword, comparePassword } from './services/bcrypt';
import { generateToken, verifyToken } from './services/jwt';

export const userRepository = new InMemoryUserRepository();

export const createUserUseCase = new CreateUserUseCase(userRepository);
export const readAllUserUseCase = new ReadAllUserUseCase(userRepository);
export const deleteUserUseCase = new DeleteUserUseCase(userRepository);
export const readUserByIDUseCase = new ReadUserByIDUseCase(userRepository);
export const updateUserUseCase = new UpdateUserUseCase(userRepository);

export const createUserController = new CreateUser_Controller(createUserUseCase);
export const readAllUserController = new ReadAllUser_Controller(readAllUserUseCase);
export const deleteUserController = new DeleteUser_Controller(deleteUserUseCase);
export const readUserByIdController = new ReadUserById_Controller(readUserByIDUseCase);
export const updateUserController = new UpdateUser_Controller(updateUserUseCase);

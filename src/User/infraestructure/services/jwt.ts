// src/Post/infrastructure/services/jwt.ts
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'mi_secreto';

export const generateToken = (idUsuario: string, rol: string): string => {
  return jwt.sign({ idUsuario, rol }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (e) {
    throw new Error('Token inválido');
  }
};

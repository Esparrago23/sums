// src/Post/infrastructure/services/jwt.ts
import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY = 'mi_secreto';

interface TokenPayload extends JwtPayload {
  idUsuario: string;
  rol: string;
}

export const generateToken = (idUsuario: string, rol: string): string => {
  return jwt.sign({ idUsuario, rol }, SECRET_KEY, { expiresIn: '1h' });
};

export const verifyToken = (token: string): TokenPayload => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    
    if (typeof decoded === 'string') {
      throw new Error('Invalid token payload');
    }

    return decoded as TokenPayload;
  } catch (e) {
    throw new Error('Token inválido');
  }
};

import { RequestHandler } from 'express';
import { verifyToken } from '../services/jwt';

export const authMiddleware: () => RequestHandler = () => {
    return (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                res.status(401).json({ error: 'No token provided' });
                return;
            }

            const token = authHeader.split(' ')[1];
            const decoded = verifyToken(token);

            // 👇 TypeScript lo acepta al forzar el tipo
            (req as any).user = decoded;

            next();
        } catch (error) {
            res.status(401).json({ error: 'Invalid token' });
        }
    };
};

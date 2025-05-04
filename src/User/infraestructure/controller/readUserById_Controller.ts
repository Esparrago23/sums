// src/User/infraestructure/controller/readUserById_Controller.ts
import { Request, Response } from "express";
import { ReadUserByIDUseCase } from "../../application/readUserById_UseCase";

export class ReadUserById_Controller {
    constructor(private readUserById: ReadUserByIDUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id, 10); // Convertir a número
            const user = await this.readUserById.execute(userId);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
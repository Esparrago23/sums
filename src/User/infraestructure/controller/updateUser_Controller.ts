// src/User/infraestructure/controller/updateUser_Controller.ts
import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../application/updateUser_UseCase";

export class UpdateUser_Controller {
    constructor(private updateUser: UpdateUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id, 10); // Convertir a número
            const userData = req.body;
            const updatedUser = await this.updateUser.execute(userId, userData);
            if (updatedUser) {
                res.status(200).json(updatedUser);
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
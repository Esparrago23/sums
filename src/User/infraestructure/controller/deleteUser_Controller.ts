// src/User/infraestructure/controller/deleteUser_Controller.ts
import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../application/deleteUser_UseCase";

export class DeleteUser_Controller {
    constructor(private deleteUser: DeleteUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10); // Convertir a número
            await this.deleteUser.execute(id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
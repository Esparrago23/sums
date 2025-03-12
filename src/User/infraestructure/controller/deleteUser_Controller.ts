import { Request,Response } from "express";
import { DeleteUserUseCase } from "../../application/deleteUser_UseCase";

export class DeleteUser_Controller {
    constructor(private deleteUser: DeleteUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await this.deleteUser.execute(id);
            res.status(204).end();
        } catch (error:any) {
            res.status(400).json({ error: error.message }); 
        }
    }
}
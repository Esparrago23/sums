import { Request,Response } from "express";
import { CreateUserUseCase } from "../../application/createUser_UseCase";

export class CreateUser_Controller {
    constructor(private createUser: CreateUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const user = req.body;
            const newUser = await this.createUser.execute(user);
            res.status(201).json(newUser);
        } catch (error:any) {
            res.status(400).json({ error: error.message });
        }
    }
}
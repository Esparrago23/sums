import { Request, Response } from "express";
import { ReadAllUserUseCase } from "../../application/readAllUser_UseCase";

export class ReadAllUser_Controller {
    constructor(private readAllUser: ReadAllUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const users = await this.readAllUser.execute();
            res.status(200).json(users);
        } catch (error:any) {
            res.status(400).json({ error: error.message });
        }
    }
}
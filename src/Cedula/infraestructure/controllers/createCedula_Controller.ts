import { Request, Response } from "express";
import { CreateCedulaUseCase } from "../../application/createCedula_UseCase";

export class CreateCedula_Controller {
    constructor(private createCedula: CreateCedulaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const cedulaData = req.body;
            const newCedula = await this.createCedula.execute(cedulaData);
            res.status(201).json(newCedula);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
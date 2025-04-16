import { Request, Response } from "express";
import { CreateConvivenciaAnimalesUseCase } from "../../application/createConvivenciaAnimales_UseCase";

export class CreateConvivenciaAnimales_Controller {
    constructor(private createConvivenciaAnimales: CreateConvivenciaAnimalesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const convivenciaAnimalesData = req.body;
            const newConvivenciaAnimales = await this.createConvivenciaAnimales.execute(convivenciaAnimalesData);
            res.status(201).json(newConvivenciaAnimales);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
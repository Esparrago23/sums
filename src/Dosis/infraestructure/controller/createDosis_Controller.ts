import { Request, Response } from "express";
import { CreateDosisUseCase } from "../../application/createDosis_UseCase";

export class CreateDosis_Controller {
    constructor(private createDosis: CreateDosisUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const dosisData = req.body;
            const newDosis = await this.createDosis.execute(dosisData);
            res.status(201).json(newDosis);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
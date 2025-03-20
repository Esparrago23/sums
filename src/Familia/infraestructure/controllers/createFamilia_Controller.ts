import { Request, Response } from "express";
import { CreateFamiliaUseCase } from "../../application/createFamilia_UseCase";

export class CreateFamilia_Controller {
    constructor(private createFamilia: CreateFamiliaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const familiaData = req.body;
            const newFamilia = await this.createFamilia.execute(familiaData);
            res.status(201).json(newFamilia);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
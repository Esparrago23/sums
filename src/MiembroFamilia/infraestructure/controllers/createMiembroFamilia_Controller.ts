import { Request, Response } from "express";
import { CreateMiembroFamiliaUseCase } from "../../application/createMiembroFamilia_UseCase";

export class CreateMiembroFamilia_Controller {
    constructor(private createMiembroFamilia: CreateMiembroFamiliaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const miembroFamiliaData = req.body;
            const newMiembroFamilia = await this.createMiembroFamilia.execute(miembroFamiliaData);
            res.status(201).json(newMiembroFamilia);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
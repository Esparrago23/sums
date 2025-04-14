import { Request, Response } from "express";
import { CreateVacunasUseCase } from "../../application/createVacunas_UseCase";

export class CreateVacunas_Controller {
    constructor(private createVacunas: CreateVacunasUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const vacunasData = req.body;
            const newVacunas = await this.createVacunas.execute(vacunasData);
            res.status(201).json(newVacunas);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
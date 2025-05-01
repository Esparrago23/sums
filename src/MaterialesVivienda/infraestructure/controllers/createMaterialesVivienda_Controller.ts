import { Request, Response } from "express";
import { CreateMaterialesViviendaUseCase } from "../../application/createMaterialesVivienda_UseCase";

export class CreateMaterialesVivienda_Controller {
    constructor(private createMaterialesVivienda: CreateMaterialesViviendaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const materialesViviendaData = req.body;
            const newMaterialesVivienda = await this.createMaterialesVivienda.execute(materialesViviendaData);
            res.status(201).json(newMaterialesVivienda);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
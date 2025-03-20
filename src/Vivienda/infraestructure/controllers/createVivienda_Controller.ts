import { Request, Response } from "express";
import { CreateViviendaUseCase } from "../../application/createVivienda_UseCase";

export class CreateVivienda_Controller {
    constructor(private createVivienda: CreateViviendaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const viviendaData = req.body;
            const newVivienda = await this.createVivienda.execute(viviendaData);
            res.status(201).json(newVivienda);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
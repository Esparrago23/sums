import { Request, Response } from "express";
import { ReadAllViviendaUseCase } from "../../application/readAllVivienda_UseCase";

export class ReadAllVivienda_Controller {
    constructor(private readAllVivienda: ReadAllViviendaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const viviendas = await this.readAllVivienda.execute();
            res.status(200).json(viviendas);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
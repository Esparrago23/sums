import { Request, Response } from "express";
import { CreateEntrevistadorUseCase } from "../../application/createEntrevistador_UseCase";

export class CreateEntrevistador_Controller {
    constructor(private createEntrevistador: CreateEntrevistadorUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const entrevistadorData = req.body;
            const newEntrevistador = await this.createEntrevistador.execute(entrevistadorData);
            res.status(201).json(newEntrevistador);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
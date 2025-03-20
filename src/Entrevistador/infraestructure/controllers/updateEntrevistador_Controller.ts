import { Request, Response } from "express";
import { UpdateEntrevistadorUseCase } from "../../application/updateEntrevistador_UseCase";

export class UpdateEntrevistador_Controller {
    constructor(private updateEntrevistador: UpdateEntrevistadorUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const entrevistadorData = req.body;
            const updatedEntrevistador = await this.updateEntrevistador.execute(id, entrevistadorData);
            if (updatedEntrevistador) {
                res.status(200).json(updatedEntrevistador);
            } else {
                res.status(404).json({ error: "Entrevistador not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
import { Request, Response } from "express";
import { ReadEntrevistadorByIdUseCase } from "../../application/readEntrevistadorById_UseCase";

export class ReadEntrevistadorById_Controller {
    constructor(private readEntrevistadorById: ReadEntrevistadorByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const entrevistador = await this.readEntrevistadorById.execute(id);
            if (entrevistador) {
                res.status(200).json(entrevistador);
            } else {
                res.status(404).json({ error: "Entrevistador not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
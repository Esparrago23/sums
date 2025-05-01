import { Request, Response } from "express";
import { ReadCedulaByIdUseCase } from "../../application/readCedulaById_UseCase";

export class ReadCedulaById_Controller {
    constructor(private readCedulaById: ReadCedulaByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const cedula = await this.readCedulaById.execute(id);
            if (cedula) {
                res.status(200).json(cedula);
            } else {
                res.status(404).json({ error: "Cedula not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
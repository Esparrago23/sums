import { Request, Response } from "express";
import { ReadFamiliaByIdUseCase } from "../../application/readFamiliaById_UseCase";

export class ReadFamiliaById_Controller {
    constructor(private readFamiliaById: ReadFamiliaByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const familia = await this.readFamiliaById.execute(id);
            if (familia) {
                res.status(200).json(familia);
            } else {
                res.status(404).json({ error: "Familia not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
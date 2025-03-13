import { Request, Response } from "express";
import { ReadMiembroFamiliaByIdUseCase } from "../../application/readMiembroFamiliaById_UseCase";

export class ReadMiembroFamiliaById_Controller {
    constructor(private readMiembroFamiliaById: ReadMiembroFamiliaByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const miembroFamilia = await this.readMiembroFamiliaById.execute(id);
            if (miembroFamilia) {
                res.status(200).json(miembroFamilia);
            } else {
                res.status(404).json({ error: "Miembro de familia not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
import { Request, Response } from "express";
import { ReadMaterialesViviendaByIdUseCase } from "../../application/readMaterialesViviendaById_UseCase";

export class ReadMaterialesViviendaById_Controller {
    constructor(private readMaterialesViviendaById: ReadMaterialesViviendaByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const materialesVivienda = await this.readMaterialesViviendaById.execute(id);
            if (materialesVivienda) {
                res.status(200).json(materialesVivienda);
            } else {
                res.status(404).json({ error: "MaterialesVivienda not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
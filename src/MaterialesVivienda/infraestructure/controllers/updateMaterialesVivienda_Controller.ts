import { Request, Response } from "express";
import { UpdateMaterialesViviendaUseCase } from "../../application/updateMaterialesVivienda_UseCase";

export class UpdateMaterialesVivienda_Controller {
    constructor(private updateMaterialesVivienda: UpdateMaterialesViviendaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const materialesViviendaData = req.body;
            const updatedMaterialesVivienda = await this.updateMaterialesVivienda.execute(id, materialesViviendaData);
            if (updatedMaterialesVivienda) {
                res.status(200).json(updatedMaterialesVivienda);
            } else {
                res.status(404).json({ error: "MaterialesVivienda not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
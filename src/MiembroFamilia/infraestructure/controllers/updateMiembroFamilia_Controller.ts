import { Request, Response } from "express";
import { UpdateMiembroFamiliaUseCase } from "../../application/updateMiembroFamilia_UseCase";

export class UpdateMiembroFamilia_Controller {
    constructor(private updateMiembroFamilia: UpdateMiembroFamiliaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const miembroFamiliaData = req.body;
            const updatedMiembroFamilia = await this.updateMiembroFamilia.execute(id, miembroFamiliaData);
            if (updatedMiembroFamilia) {
                res.status(200).json(updatedMiembroFamilia);
            } else {
                res.status(404).json({ error: "Miembro de familia not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
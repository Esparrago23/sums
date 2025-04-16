import { Request, Response } from "express";
import { UpdateVacunasUseCase } from "../../application/updateVacunas_UseCase";

export class UpdateVacunas_Controller {
    constructor(private updateVacunas: UpdateVacunasUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const vacunasData = req.body;
            const updatedVacunas = await this.updateVacunas.execute(id, vacunasData);
            if (updatedVacunas) {
                res.status(200).json(updatedVacunas);
            } else {
                res.status(404).json({ error: "Vacuna not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
import { Request, Response } from "express";
import { UpdateCedulaUseCase } from "../../application/updateCedula_UseCase";

export class UpdateCedula_Controller {
    constructor(private updateCedula: UpdateCedulaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const cedulaData = req.body;
            const updatedCedula = await this.updateCedula.execute(id, cedulaData);
            if (updatedCedula) {
                res.status(200).json(updatedCedula);
            } else {
                res.status(404).json({ error: "Cedula not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
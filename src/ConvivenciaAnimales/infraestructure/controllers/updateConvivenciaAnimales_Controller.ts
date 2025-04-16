import { Request, Response } from "express";
import { UpdateConvivenciaAnimalesUseCase } from "../../application/updateConvivenciaAnimales_UseCase";

export class UpdateConvivenciaAnimales_Controller {
    constructor(private updateConvivenciaAnimales: UpdateConvivenciaAnimalesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const convivenciaAnimalesData = req.body;
            const updatedConvivenciaAnimales = await this.updateConvivenciaAnimales.execute(id, convivenciaAnimalesData);
            if (updatedConvivenciaAnimales) {
                res.status(200).json(updatedConvivenciaAnimales);
            } else {
                res.status(404).json({ error: "Convivencia animales not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
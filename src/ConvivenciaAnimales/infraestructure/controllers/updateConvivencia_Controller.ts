import { Request,Response } from "express";
import { UpdateConvivenciaAnimalesUseCase } from "../../application/updateConvivencia_UseCase";

export class UpdateConvivencia_Controller {
    constructor(private updateConvivencia: UpdateConvivenciaAnimalesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const convivenciaData = req.body;
            const updatedConvivencia = await this.updateConvivencia.execute(id, convivenciaData);
            if (convivenciaData) {
                res.status(200).json(updatedConvivencia);
            }  else {
                res.status(404).json({ error: "Convivencia not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
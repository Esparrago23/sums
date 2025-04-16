import { Request,Response } from "express";
import { ReadConvivenciaByIdUseCase } from "../../application/readConvivenciaById_UseCase";

export class ReadConvivenciaById_Controller {
    constructor(private readConvivenciaById: ReadConvivenciaByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const convivencia = await this.readConvivenciaById.execute(id);
            if(convivencia){
                res.status(200).json(convivencia);
            } else {
                res.status(404).json({ error: "Convivencia no encontrada" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
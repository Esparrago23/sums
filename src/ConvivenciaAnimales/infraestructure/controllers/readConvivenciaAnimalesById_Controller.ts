import { Request, Response } from "express";
import { ReadConvivenciaAnimalesByIdUseCase } from "../../application/readConvivenciaAnimalesById_UseCase";

export class ReadConvivenciaAnimalesById_Controller {
    constructor(private readConvivenciaAnimalesById: ReadConvivenciaAnimalesByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const convivenciaAnimales = await this.readConvivenciaAnimalesById.execute(id);
            if (convivenciaAnimales) {
                res.status(200).json(convivenciaAnimales);
            } else {
                res.status(404).json({ error: "Convivencia animales not found" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
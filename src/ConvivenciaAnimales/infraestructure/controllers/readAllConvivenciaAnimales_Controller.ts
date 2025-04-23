import { Request, Response } from "express";
import { ReadAllConvivenciaAnimalesUseCase } from "../../application/readAllConvivenciaAnimales_UseCase";

export class ReadAllConvivenciaAnimales_Controller {
    constructor(private readAllConvivenciaAnimales: ReadAllConvivenciaAnimalesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const convivenciaAnimalesList = await this.readAllConvivenciaAnimales.execute();
            res.status(200).json(convivenciaAnimalesList);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}

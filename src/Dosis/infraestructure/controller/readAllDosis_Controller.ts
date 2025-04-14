import { Request, Response } from "express";
import { ReadAllDosisUseCase } from "../../application/readAllDosis_UseCase";

export class ReadAllDosis_Controller {
    constructor(private readAllDosis: ReadAllDosisUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const dosis = await this.readAllDosis.execute();
            res.status(200).json(dosis);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
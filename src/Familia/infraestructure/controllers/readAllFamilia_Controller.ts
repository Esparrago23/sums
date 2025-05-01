import { Request, Response } from "express";
import { ReadAllFamiliaUseCase } from "../../application/readAllFamilia_UseCase";

export class ReadAllFamilia_Controller {
    constructor(private readAllFamilia: ReadAllFamiliaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const familias = await this.readAllFamilia.execute();
            res.status(200).json(familias);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}

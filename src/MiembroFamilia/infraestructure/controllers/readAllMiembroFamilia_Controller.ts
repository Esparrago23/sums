import { Request, Response } from "express";
import { ReadAllMiembroFamiliaUseCase } from "../../application/readAllMiembroFamilia_UseCase";

export class ReadAllMiembroFamilia_Controller {
    constructor(private readAllMiembroFamilia: ReadAllMiembroFamiliaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const miembrosFamilia = await this.readAllMiembroFamilia.execute();
            res.status(200).json(miembrosFamilia);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
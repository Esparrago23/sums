import { Request, Response } from "express";
import { ReadAllVacunasUseCase } from "../../application/readAllVacunas_UseCase";

export class ReadAllVacunas_Controller {
    constructor(private readAllVacunas: ReadAllVacunasUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const vacunas = await this.readAllVacunas.execute();
            res.status(200).json(vacunas);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
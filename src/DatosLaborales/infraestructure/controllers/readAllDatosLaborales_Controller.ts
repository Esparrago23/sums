import { Request, Response } from "express";
import { ReadAllDatosLaboralesUseCase } from "../../application/readAllDatosLaborales_UseCase";

export class ReadAllDatosLaborales_Controller {
    constructor(private readAllDatosLaborales: ReadAllDatosLaboralesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const datosLaborales = await this.readAllDatosLaborales.execute();
            res.status(200).json(datosLaborales);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
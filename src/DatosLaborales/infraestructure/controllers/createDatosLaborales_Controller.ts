import { Request, Response } from "express";
import { CreateDatosLaboralesUseCase } from "../../application/createDatosLaborales_UseCase";

export class CreateDatosLaborales_Controller {
    constructor(private createDatosLaborales: CreateDatosLaboralesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const datosLaboralesData = req.body;
            const newDatosLaborales = await this.createDatosLaborales.execute(datosLaboralesData);
            res.status(201).json(newDatosLaborales);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
import { Request, Response } from "express";
import { AgregarVisitaUseCase } from "../../application/agregarVisita_UseCase";

export class AgregarVisita_Controller {
    constructor(private agregarVisitaUseCase: AgregarVisitaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { servicioId } = req.params;
            const visitaData = req.body;
            const servicioActualizado = await this.agregarVisitaUseCase.execute(Number(servicioId), visitaData);
            res.status(200).json(servicioActualizado);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
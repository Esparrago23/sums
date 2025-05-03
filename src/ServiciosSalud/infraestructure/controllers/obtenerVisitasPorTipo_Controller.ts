import { Request, Response } from "express";
import { ObtenerVisitasPorTipoUseCase } from "../../application/obtenerVisitasPorTipo_UseCase";

export class ObtenerVisitasPorTipo_Controller {
    constructor(private obtenerVisitasPorTipoUseCase: ObtenerVisitasPorTipoUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { servicioId, tipo } = req.params;
            const visitas = await this.obtenerVisitasPorTipoUseCase.execute(Number(servicioId), tipo);
            res.status(200).json(visitas);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
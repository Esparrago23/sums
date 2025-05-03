import { Request, Response } from "express";
import { ObtenerUltimaVisitaUseCase } from "../../application/obtenerUltimaVisita_UseCase";

export class ObtenerUltimaVisita_Controller {
    constructor(private obtenerUltimaVisitaUseCase: ObtenerUltimaVisitaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { servicioId } = req.params;
            const ultimaVisita = await this.obtenerUltimaVisitaUseCase.execute(Number(servicioId));
            if (ultimaVisita) {
                res.status(200).json(ultimaVisita);
            } else {
                res.status(404).json({ message: "No se encontraron visitas para este servicio" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
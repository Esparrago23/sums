import { Request, Response } from "express";
import { EliminarVisitaUseCase } from "../../application/eliminarVisita_UseCase";

export class EliminarVisita_Controller {
    constructor(private eliminarVisitaUseCase: EliminarVisitaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { servicioId, fecha } = req.params;
            const servicioActualizado = await this.eliminarVisitaUseCase.execute(Number(servicioId), fecha);
            res.status(200).json(servicioActualizado);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
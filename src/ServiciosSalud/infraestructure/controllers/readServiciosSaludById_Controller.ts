import { Request, Response } from "express";
import { ReadServicioSaludByIdUseCase} from "../../application/readServiciosSaludById_UseCase";

export class ReadServicioSaludById_Controller {
    constructor(private readServicioSaludById: ReadServicioSaludByIdUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            const servicioSalud = await this.readServicioSaludById.execute(id);
            if (servicioSalud) {
                res.status(200).json(servicioSalud);
            } else {
                res.status(404).json({ error: "Servicio de salud no encontrado" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
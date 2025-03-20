import { Request, Response } from "express";
import { DeleteDatosLaboralesUseCase } from "../../application/deleteDatosLaborales_UseCase";

export class DeleteDatosLaborales_Controller {
    constructor(private deleteDatosLaborales: DeleteDatosLaboralesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            await this.deleteDatosLaborales.execute(id);
            res.status(200).json({ message: "Datos laborales deleted successfully" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
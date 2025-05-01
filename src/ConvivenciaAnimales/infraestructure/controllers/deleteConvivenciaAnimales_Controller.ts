import { Request, Response } from "express";
import { DeleteConvivenciaAnimalesUseCase } from "../../application/deleteConvivenciaAnimales_UseCase";

export class DeleteConvivenciaAnimales_Controller {
    constructor(private deleteConvivenciaAnimales: DeleteConvivenciaAnimalesUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            await this.deleteConvivenciaAnimales.execute(id);
            res.status(200).json({ message: "Convivencia animales deleted successfully" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
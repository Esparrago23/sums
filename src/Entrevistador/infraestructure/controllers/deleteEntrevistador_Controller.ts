import { Request, Response } from "express";
import { DeleteEntrevistadorUseCase } from "../../application/deleteEntrevistador_UseCase";

export class DeleteEntrevistador_Controller {
    constructor(private deleteEntrevistador: DeleteEntrevistadorUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            await this.deleteEntrevistador.execute(id);
            res.status(200).json({ message: "Entrevistador deleted successfully" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
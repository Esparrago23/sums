import { Request, Response } from "express";
import { DeleteFamiliaUseCase } from "../../application/deleteFamilia_UseCase";

export class DeleteFamilia_Controller {
    constructor(private deleteFamilia: DeleteFamiliaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            await this.deleteFamilia.execute(id);
            res.status(200).json({ message: "Familia deleted successfully" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
import { Request, Response } from "express";
import { DeleteMiembroFamiliaUseCase } from "../../application/deleteMiembroFamilia_UseCase";

export class DeleteMiembroFamilia_Controller {
    constructor(private deleteMiembroFamilia: DeleteMiembroFamiliaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            await this.deleteMiembroFamilia.execute(id);
            res.status(200).json({ message: "Miembro de familia deleted successfully" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
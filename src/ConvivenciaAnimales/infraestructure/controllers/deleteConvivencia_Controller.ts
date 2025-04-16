import { Response,Request } from "express";
import { DeleteConvivenciaAnimalesUseCase } from "../../application/deleteConvivencia_UseCase";

export class DeleteConvivencia_Controller {
    constructor(private deleteConvivencia: DeleteConvivenciaAnimalesUseCase){}

    async run(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);
            await this.deleteConvivencia.execute(id);
            res.status(200).json({ message: "Convivencia eliminada con éxito" });
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

}   
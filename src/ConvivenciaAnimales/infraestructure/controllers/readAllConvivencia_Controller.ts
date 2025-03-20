import { Response,Request } from "express";
import { ReadAllConvivenciaUseCase } from "../../application/readAllConvivencia_UseCase";

export class ReadAllConvivencia_Controller {
    constructor(private readAllConvivencia: ReadAllConvivenciaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const convivencias = await this.readAllConvivencia.execute();
            res.status(200).json(convivencias);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
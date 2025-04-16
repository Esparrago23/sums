import { Response,Request } from "express";
import { CreateConvivenciaAnimalesUseCase } from "../../application/createConvivencia_UseCase";

export class CreateConvivencia_Controller {
    constructor(private createConvivencia: CreateConvivenciaAnimalesUseCase) {}
    
    async run(req: Request, res: Response) {
        try {
        const convivenciaData = req.body;
        const newConvivencia = await this.createConvivencia.execute(convivenciaData);
        res.status(201).json(newConvivencia);
        } catch (error: any) {
        res.status(400).json({ error: error.message });
        }
    }
}
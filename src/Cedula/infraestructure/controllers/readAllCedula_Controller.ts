import { Request, Response } from "express";
import { ReadAllCedulaUseCase } from "../../application/readAllCedula_UseCase";

export class ReadAllCedula_Controller {
    constructor(private readAllCedula: ReadAllCedulaUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const cedulas = await this.readAllCedula.execute();
            res.status(200).json(cedulas);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
import { Request, Response } from "express";
import { ReadAllEntrevistadorUseCase } from "../../application/readAllEntrevistador_UseCase";

export class ReadAllEntrevistador_Controller {
    constructor(private readAllEntrevistador: ReadAllEntrevistadorUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const entrevistadores = await this.readAllEntrevistador.execute();
            res.status(200).json(entrevistadores);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
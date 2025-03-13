import { Request, Response } from "express";
import { CreateEstiloVidaUseCase } from "../../application/createEstiloVida_UseCase";

export class CreateEstiloVida_Controller {
  constructor(private createEstiloVida: CreateEstiloVidaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const estiloVidaData = req.body;
      const newEstiloVida = await this.createEstiloVida.execute(estiloVidaData);
      res.status(201).json(newEstiloVida);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
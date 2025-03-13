import { Request, Response } from "express";
import { ReadEstiloVidaByIdUseCase } from "../../application/readEstiloVidaById_UseCase";

export class ReadEstiloVidaById_Controller {
  constructor(private readEstiloVidaById: ReadEstiloVidaByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const estiloVida = await this.readEstiloVidaById.execute(id);
      if (estiloVida) {
        res.status(200).json(estiloVida);
      } else {
        res.status(404).json({ error: "Estilo de vida not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
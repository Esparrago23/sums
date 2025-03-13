import { Request, Response } from "express";
import { ReadAllEstiloVidaUseCase } from "../../application/readAllEstiloVida_UseCase";

export class ReadAllEstiloVida_Controller {
  constructor(private readAllEstiloVida: ReadAllEstiloVidaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const estilosVida = await this.readAllEstiloVida.execute();
      res.status(200).json(estilosVida);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
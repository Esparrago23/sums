import { Request, Response } from "express";
import { DeleteEstiloVidaUseCase } from "../../application/deleteEstiloVida_UseCase";

export class DeleteEstiloVida_Controller {
  constructor(private deleteEstiloVida: DeleteEstiloVidaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteEstiloVida.execute(id);
      res.status(200).json({ message: "Estilo de vida deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
import { Request, Response } from "express";
import { UpdateEstiloVidaUseCase } from "../../application/updateEstiloVida_UseCase";

export class UpdateEstiloVida_Controller {
  constructor(private updateEstiloVida: UpdateEstiloVidaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const estiloVidaData = req.body;
      const updatedEstiloVida = await this.updateEstiloVida.execute(id, estiloVidaData);
      if (updatedEstiloVida) {
        res.status(200).json(updatedEstiloVida);
      } else {
        res.status(404).json({ error: "Estilo de vida no encontrado" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
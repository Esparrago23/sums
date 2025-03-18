import { Request, Response } from "express";
import { UpdateSaludFamiliarUseCase } from "../../application/updateSaludFamiliar_UseCase";

export class UpdateSaludFamiliar_Controller {
  constructor(private updateSaludFamiliar: UpdateSaludFamiliarUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const saludFamiliarData = req.body;
      const updatedSaludFamiliar = await this.updateSaludFamiliar.execute(
        id,
        saludFamiliarData
      );
      if (updatedSaludFamiliar) {
        res.status(200).json(updatedSaludFamiliar);
      } else {
        res.status(404).json({ error: "SaludFamiliar not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

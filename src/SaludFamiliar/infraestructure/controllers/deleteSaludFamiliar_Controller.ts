import { Request, Response } from "express";
import { DeleteSaludFamiliarUseCase } from "../../application/deleteSaludFamiliar_UseCase";

export class DeleteSaludFamiliar_Controller {
  constructor(private deleteSaludFamiliar: DeleteSaludFamiliarUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteSaludFamiliar.execute(id);
      res.status(200).json({ message: "SaludFamiliar deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

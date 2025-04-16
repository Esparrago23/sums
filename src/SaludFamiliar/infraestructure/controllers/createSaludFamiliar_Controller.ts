import { Request, Response } from "express";
import { CreateSaludFamiliarUseCase } from "../../application/createSaludFamiliar_UseCase";

export class CreateSaludFamiliar_Controller {
  constructor(private createSaludFamiliar: CreateSaludFamiliarUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const saludFamiliarData = req.body;
      const newSaludFamiliar = await this.createSaludFamiliar.execute(
        saludFamiliarData
      );
      res.status(201).json(newSaludFamiliar);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

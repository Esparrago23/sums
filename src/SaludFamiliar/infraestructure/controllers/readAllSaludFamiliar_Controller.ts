import { Request, Response } from "express";
import { ReadAllSaludFamiliarUseCase } from "../../application/readAllSaludFamiliar_UseCase";

export class ReadAllSaludFamiliar_Controller {
  constructor(private readAllSaludFamiliar: ReadAllSaludFamiliarUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const saludFamiliares = await this.readAllSaludFamiliar.execute();
      res.status(200).json(saludFamiliares);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

import { Request, Response } from "express";
import { ReadSaludFamiliarByIdUseCase } from "../../application/readSaludFamiliarById_UseCase";

export class ReadSaludFamiliarById_Controller {
  constructor(private readSaludFamiliarById: ReadSaludFamiliarByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const saludFamiliar = await this.readSaludFamiliarById.execute(id);
      if (saludFamiliar) {
        res.status(200).json(saludFamiliar);
      } else {
        res.status(404).json({ error: "SaludFamiliar not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

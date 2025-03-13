import { Request, Response } from "express";
import { ReadAllPersonaUseCase } from "../../application/readAllPersona_UseCase";

export class ReadAllPersona_Controller {
  constructor(private readAllPersona: ReadAllPersonaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const personas = await this.readAllPersona.execute();
      res.status(200).json(personas);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
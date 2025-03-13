import { Request, Response } from "express";
import { ReadPersonaByIdUseCase } from "../../application/readPersonaById_UseCase";

export class ReadPersonaById_Controller {
  constructor(private readPersonaById: ReadPersonaByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const persona = await this.readPersonaById.execute(id);
      if (persona) {
        res.status(200).json(persona);
      } else {
        res.status(404).json({ error: "Persona not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
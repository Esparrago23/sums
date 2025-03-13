import { Request, Response } from "express";
import { UpdatePersonaUseCase } from "../../application/updatePersona_UseCase";

export class UpdatePersona_Controller {
  constructor(private updatePersona: UpdatePersonaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const personaData = req.body;
      const updatedPersona = await this.updatePersona.execute(id, personaData);
      if (updatedPersona) {
        res.status(200).json(updatedPersona);
      } else {
        res.status(404).json({ error: "Persona not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
import { Request, Response } from "express";
import { CreatePersonaUseCase } from "../../application/createPersona_UseCase";

export class CreatePersona_Controller {
  constructor(private createPersona: CreatePersonaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const personaData = req.body;

      // Convertir la fecha si viene como string
      if (typeof personaData.fecha_nacimiento === 'string') {
        personaData.fecha_nacimiento = new Date(personaData.fecha_nacimiento);
      }

      const newPersona = await this.createPersona.execute(personaData);
      res.status(201).json(newPersona);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
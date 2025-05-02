import { Request, Response } from "express";
import { UpdatePersonaUseCase } from "../../application/updatePersona_UseCase";

export class UpdatePersona_Controller {
  constructor(private updatePersona: UpdatePersonaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const personaData = req.body;

      // Convertir la fecha si viene como string
      if (typeof personaData.fecha_nacimiento === 'string') {
        personaData.fecha_nacimiento = new Date(personaData.fecha_nacimiento);
      }

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
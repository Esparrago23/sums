import { Request, Response } from "express";
import { UpdateEducacionUseCase } from "../../application/updateEducacion_UseCase";

export class UpdateEducacion_Controller {
  constructor(private updateEducacion: UpdateEducacionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const educacionData = req.body;
      const updatedEducacion = await this.updateEducacion.execute(id, educacionData);
      if (updatedEducacion) {
        res.status(200).json(updatedEducacion);
      } else {
        res.status(404).json({ error: "Educacion not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
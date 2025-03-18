import { Request, Response } from "express";
import { CreateEducacionUseCase } from "../../application/createEducacion_UseCase";

export class CreateEducacion_Controller {
  constructor(private createEducacion: CreateEducacionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const educacionData = req.body;
      const newEducacion = await this.createEducacion.execute(educacionData);
      res.status(201).json(newEducacion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

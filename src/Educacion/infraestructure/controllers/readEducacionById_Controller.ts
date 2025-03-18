import { Request, Response } from "express";
import { ReadEducacionByIdUseCase } from "../../application/readEducacionById_UseCase";

export class ReadEducacionById_Controller {
  constructor(private readEducacionById: ReadEducacionByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const educacion = await this.readEducacionById.execute(id);
      if (educacion) {
        res.status(200).json(educacion);
      } else {
        res.status(404).json({ error: "Educacion not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

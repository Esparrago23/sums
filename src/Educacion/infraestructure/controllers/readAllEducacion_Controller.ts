import { Request, Response } from "express";
import { ReadAllEducacionUseCase } from "../../application/readAllEducacion_UseCase";

export class ReadAllEducacion_Controller {
  constructor(private readAllEducacion: ReadAllEducacionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const educaciones = await this.readAllEducacion.execute();
      res.status(200).json(educaciones);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

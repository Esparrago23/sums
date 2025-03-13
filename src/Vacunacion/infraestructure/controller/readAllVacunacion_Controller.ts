import { Request, Response } from "express";
import { ReadAllVacunacion } from "../../application/readAllVacunacion_UseCase";

export class ReadAllVacunacion_Controller {
  constructor(private readAllVacunacion: ReadAllVacunacion) {}

  async run(req: Request, res: Response) {
    try {
      const vacunaciones = await this.readAllVacunacion.execute();
      res.status(200).json(vacunaciones);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
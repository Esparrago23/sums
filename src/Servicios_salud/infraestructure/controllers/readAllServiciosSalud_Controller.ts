import { Request, Response } from "express";
import { ReadAllServiciosSaludUseCase } from "../../application/readAllServiciosSalud_UseCase";

export class ReadAllServiciosSalud_Controller {
  constructor(private readAllServiciosSalud: ReadAllServiciosSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const serviciosSalud = await this.readAllServiciosSalud.execute();
      res.status(200).json(serviciosSalud);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
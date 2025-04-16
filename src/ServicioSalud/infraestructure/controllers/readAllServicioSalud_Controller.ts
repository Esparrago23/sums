import { Request, Response } from "express";
import { ReadAllServicioSaludUseCase } from "../../application/readAllServicioSalud_UseCase";

export class ReadAllServicioSalud_Controller {
  constructor(private readAllServicioSalud: ReadAllServicioSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const serviciosSalud = await this.readAllServicioSalud.execute();
      res.status(200).json(serviciosSalud);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
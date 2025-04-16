import { Request, Response } from "express";
import { CreateServicioSaludUseCase } from "../../application/createServicioSalud_UseCase";

export class CreateServicioSalud_Controller {
  constructor(private createServicioSalud: CreateServicioSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const servicioSaludData = req.body;
      const newServicioSalud = await this.createServicioSalud.execute(servicioSaludData);
      res.status(201).json(newServicioSalud);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
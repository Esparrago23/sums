import { Request, Response } from "express";
import { CreateServiciosSaludUseCase } from "../../application/createServiciosSalud_UseCase";

export class CreateServiciosSalud_Controller {
  constructor(private createServiciosSalud: CreateServiciosSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const serviciosSaludData = req.body;
      const newServiciosSalud = await this.createServiciosSalud.execute(serviciosSaludData);
      res.status(201).json(newServiciosSalud);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
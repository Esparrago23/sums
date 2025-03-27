import { Request, Response } from "express";
import { CreateServiciosBasicosUseCase } from "../../application/createServiciosBasicos_UseCase";

export class CreateServiciosBasicos_Controller {
  constructor(private createServiciosBasicos: CreateServiciosBasicosUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const serviciosBasicosData = req.body;
      const newServiciosBasicos = await this.createServiciosBasicos.execute(serviciosBasicosData);
      res.status(201).json(newServiciosBasicos);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
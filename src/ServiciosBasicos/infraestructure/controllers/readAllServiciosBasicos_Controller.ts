import { Request, Response } from "express";
import { ReadAllServiciosBasicosUseCase } from "../../application/readAllServiciosBasicos_UseCase";

export class ReadAllServiciosBasicos_Controller {
  constructor(private readAllServiciosBasicos: ReadAllServiciosBasicosUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const serviciosBasicos = await this.readAllServiciosBasicos.execute();
      res.status(200).json(serviciosBasicos);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
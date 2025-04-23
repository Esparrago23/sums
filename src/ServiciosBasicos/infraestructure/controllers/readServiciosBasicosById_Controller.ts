import { Request, Response } from "express";
import { ReadServiciosBasicosByIdUseCase } from "../../application/readServiciosBasicosById_UseCase";

export class ReadServiciosBasicosById_Controller {
  constructor(private readServiciosBasicosById: ReadServiciosBasicosByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const serviciosBasicos = await this.readServiciosBasicosById.execute(id);
      if (serviciosBasicos) {
        res.status(200).json(serviciosBasicos);
      } else {
        res.status(404).json({ error: "Servicios Básicos no encontrados" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
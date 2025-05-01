import { Request, Response } from "express";
import { UpdateServiciosBasicosUseCase } from "../../application/updateServiciosBasicos_UseCase";

export class UpdateServiciosBasicos_Controller {
  constructor(private updateServiciosBasicos: UpdateServiciosBasicosUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const serviciosBasicosData = req.body;
      const updatedServiciosBasicos = await this.updateServiciosBasicos.execute(id, serviciosBasicosData);
      if (updatedServiciosBasicos) {
        res.status(200).json(updatedServiciosBasicos);
      } else {
        res.status(404).json({ error: "Servicios Básicos no encontrados" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
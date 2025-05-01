import { Request, Response } from "express";
import { DeleteServiciosBasicosUseCase } from "../../application/deleteServiciosBasicos_UseCase";

export class DeleteServiciosBasicos_Controller {
  constructor(private deleteServiciosBasicos: DeleteServiciosBasicosUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteServiciosBasicos.execute(id);
      res.status(200).json({ message: "Servicios básicos eliminados con éxito" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
import { Request, Response } from "express";
import { UpdateServicioSaludUseCase } from "../../application/updateServicioSalud_UseCase";

export class UpdateServicioSalud_Controller {
  constructor(private updateServicioSalud: UpdateServicioSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const servicioSaludData = req.body;
      const updatedServicioSalud = await this.updateServicioSalud.execute(id, servicioSaludData);
      if (updatedServicioSalud) {
        res.status(200).json(updatedServicioSalud);
      } else {
        res.status(404).json({ error: "Servicio de salud not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
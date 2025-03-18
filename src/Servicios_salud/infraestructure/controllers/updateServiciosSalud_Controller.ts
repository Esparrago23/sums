import { Request, Response } from "express";
import { UpdateServiciosSaludUseCase } from "../../application/updateServiciosSalud_UseCase";

export class UpdateServiciosSalud_Controller {
  constructor(private updateServiciosSalud: UpdateServiciosSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const serviciosSaludData = req.body;
      const updatedServiciosSalud = await this.updateServiciosSalud.execute(id, serviciosSaludData);
      if (updatedServiciosSalud) {
        res.status(200).json(updatedServiciosSalud);
      } else {
        res.status(404).json({ error: "Servicios de salud not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
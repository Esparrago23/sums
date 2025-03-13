import { Request, Response } from "express";
import { UpdateVacunacionUseCase } from "../../application/updateVacunacion_UseCase";

export class UpdateVacunacion_Controller {
  constructor(private updateVacunacion: UpdateVacunacionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const vacunacionData = req.body;
      const updatedVacunacion = await this.updateVacunacion.execute(id,vacunacionData);
      if (updatedVacunacion) {
        res.status(200).json(updatedVacunacion);
      } else {
        res.status(404).json({ error: "Vacunacion not found" });
      }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
      }
  }
}

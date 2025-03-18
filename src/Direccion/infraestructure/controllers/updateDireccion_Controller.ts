import { Request, Response } from "express";
import { UpdateDireccionUseCase } from "../../application/updateDireccion_UseCase";

export class UpdateDireccion_Controller {
  constructor(private updateDireccion: UpdateDireccionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const direccionData = req.body;
      const updatedDireccion = await this.updateDireccion.execute(id, direccionData);
      if (updatedDireccion) {
        res.status(200).json(updatedDireccion);
      } else {
        res.status(404).json({ error: "Direccion not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
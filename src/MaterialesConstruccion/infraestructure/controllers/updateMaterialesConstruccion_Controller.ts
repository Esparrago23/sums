import { Request, Response } from "express";
import { UpdateMaterialesConstruccionUseCase } from "../../application/updateMaterialesConstruccion_UseCase";

export class UpdateMaterialesConstruccion_Controller {
  constructor(private updateMaterialesConstruccion: UpdateMaterialesConstruccionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const materialesConstruccionData = req.body;
      const updatedMaterialesConstruccion = await this.updateMaterialesConstruccion.execute(id, materialesConstruccionData);
      if (updatedMaterialesConstruccion) {
        res.status(200).json(updatedMaterialesConstruccion);
      } else {
        res.status(404).json({ error: "Materiales de construcción not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
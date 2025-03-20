import { Request,Response } from "express";
import { UpdateUnidadSaludUseCase } from "../../application/updateUnidadSaludUseCase";

export class UpdateUnidadSalud_Controller {
  constructor(private updateUnidadSalud: UpdateUnidadSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const unidadSaludData = req.body;
      const updatedUnidadSalud = await this.updateUnidadSalud.execute(id, unidadSaludData);
      if (updatedUnidadSalud) {
        res.status(200).json(updatedUnidadSalud);
      } else {
        res.status(404).json({ error: "UnidadSalud not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
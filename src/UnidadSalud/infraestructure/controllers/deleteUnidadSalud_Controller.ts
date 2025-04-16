import { Request, Response } from "express";
import { DeleteUnidadSaludUseCase } from "../../application/deleteUnidadSaludUseCase";

export class DeleteUnidadSalud_Controller {
  constructor(private deleteUnidadSalud: DeleteUnidadSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteUnidadSalud.execute(id);
      res.status(200).json({ message: "Unidad de salud eliminada con éxito" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
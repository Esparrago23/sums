import { Request, Response } from "express";
import { DeleteMaterialesViviendaUseCase } from "../../application/deleteMaterialesVivienda_UseCase";

export class DeleteMaterialesVivienda_Controller {
  constructor(private deleteMaterialesConstruccion: DeleteMaterialesViviendaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteMaterialesConstruccion.execute(id);
      res.status(200).json({ message: "Materiales de construcción deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
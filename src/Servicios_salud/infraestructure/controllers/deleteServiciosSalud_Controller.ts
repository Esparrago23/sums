import { Request, Response } from "express";
import { DeleteServiciosSaludUseCase } from "../../application/deleteServiciosSalud_UseCase";

export class DeleteServiciosSalud_Controller {
  constructor(private deleteServiciosSalud: DeleteServiciosSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteServiciosSalud.execute(id);
      res.status(200).json({ message: "Servicios de salud deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
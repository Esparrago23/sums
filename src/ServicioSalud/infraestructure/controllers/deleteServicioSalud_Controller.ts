import { Request, Response } from "express";
import { DeleteServicioSaludUseCase } from "../../application/deleteServicioSalud_UseCase";

export class DeleteServicioSalud_Controller {
  constructor(private deleteServicioSalud: DeleteServicioSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteServicioSalud.execute(id);
      res
        .status(200)
        .json({ message: "Servicio de salud deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

import { Request, Response } from "express";
import { ReadServiciosSaludByIdUseCase } from "../../application/readServiciosSaludById_UseCase";

export class ReadServiciosSaludById_Controller {
  constructor(private readServiciosSaludById: ReadServiciosSaludByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const serviciosSalud = await this.readServiciosSaludById.execute(id);
      if (serviciosSalud) {
        res.status(200).json(serviciosSalud);
      } else {
        res.status(404).json({ error: "Servicios de salud not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
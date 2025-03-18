import { Request, Response } from "express";
import { ReadDireccionByIdUseCase } from "../../application/readDireccionById_UseCase";

export class ReadDireccionById_Controller {
  constructor(private readDireccionById: ReadDireccionByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const direccion = await this.readDireccionById.execute(id);
      if (direccion) {
        res.status(200).json(direccion);
      } else {
        res.status(404).json({ error: "Direccion not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
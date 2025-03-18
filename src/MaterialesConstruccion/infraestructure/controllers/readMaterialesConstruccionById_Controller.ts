import { Request, Response } from "express";
import { ReadMaterialesConstruccionByIdUseCase } from "../../application/readMaterialesConstruccionById_UseCase";

export class ReadMaterialesConstruccionById_Controller {
  constructor(private readMaterialesConstruccionById: ReadMaterialesConstruccionByIdUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const materialesConstruccion = await this.readMaterialesConstruccionById.execute(id);
      if (materialesConstruccion) {
        res.status(200).json(materialesConstruccion);
      } else {
        res.status(404).json({ error: "Materiales de construcción not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
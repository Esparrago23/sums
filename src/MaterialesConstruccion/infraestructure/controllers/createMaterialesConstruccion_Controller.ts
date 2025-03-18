import { Request, Response } from "express";
import { CreateMaterialesConstruccionUseCase } from "../../application/createMaterialesConstruccion_UseCase";

export class CreateMaterialesConstruccion_Controller {
  constructor(private createMaterialesConstruccion: CreateMaterialesConstruccionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const materialesConstruccionData = req.body;
      const newMaterialesConstruccion = await this.createMaterialesConstruccion.execute(materialesConstruccionData);
      res.status(201).json(newMaterialesConstruccion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
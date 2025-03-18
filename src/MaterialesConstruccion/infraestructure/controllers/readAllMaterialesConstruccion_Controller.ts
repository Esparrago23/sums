import { Request, Response } from "express";
import { ReadAllMaterialesConstruccionUseCase } from "../../application/readAllMaterialesConstruccion_UseCase";

export class ReadAllMaterialesConstruccion_Controller {
  constructor(private readAllMaterialesConstruccion: ReadAllMaterialesConstruccionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const materialesConstruccion = await this.readAllMaterialesConstruccion.execute();
      res.status(200).json(materialesConstruccion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
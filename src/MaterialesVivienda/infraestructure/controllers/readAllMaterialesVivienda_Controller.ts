import { Request, Response } from "express";
import { ReadAllMaterialesViviendaUseCase } from "../../application/readAllMaterialesVivienda_UseCase";

export class ReadAllMaterialesVivienda_Controller {
  constructor(private readAllMaterialesConstruccion: ReadAllMaterialesViviendaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const materialesConstruccion = await this.readAllMaterialesConstruccion.execute();
      res.status(200).json(materialesConstruccion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
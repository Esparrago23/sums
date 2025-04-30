import { Request, Response } from "express";
import { CreateMaterialesViviendaUseCase } from "../../application/createMaterialesVivienda_UseCase";

export class CreateMaterialesVivienda_Controller {
  constructor(private CreateMaterialesVivienda: CreateMaterialesViviendaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const materialesConstruccionData = req.body;
      const newMaterialesConstruccion = await this.CreateMaterialesVivienda.execute(materialesConstruccionData);
      res.status(201).json(newMaterialesConstruccion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
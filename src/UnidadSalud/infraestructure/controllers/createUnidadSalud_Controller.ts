import { Request, Response } from "express";
import { CreateUnidadSaludUseCase } from "../../application/createUnidadSaludUseCase";

export class CreateUnidadSalud_Controller {
  constructor(private createUnidadSalud: CreateUnidadSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const unidadSaludData = req.body;
      const newUnidadSalud = await this.createUnidadSalud.execute(unidadSaludData);
      res.status(201).json(newUnidadSalud);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
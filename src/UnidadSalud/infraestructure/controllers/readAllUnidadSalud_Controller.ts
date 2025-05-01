import { Request, Response } from "express";
import { ReadAllUnidadSaludUseCase } from "../../application/readAllUnidadSaludUseCase";

export class ReadAllUnidadSalud_Controller {
  constructor(private readAllUnidadSalud: ReadAllUnidadSaludUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const unidadesSalud = await this.readAllUnidadSalud.execute();
      res.status(200).json(unidadesSalud);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
import { Request, Response } from "express";
import { ReadByIdVacunacionUseCase } from "../../application/readByIdVacunacion_UseCase";

export class ReadById_Controller {
  constructor(private readByIdVacunacionUseCase: ReadByIdVacunacionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      const vacunacion = await this.readByIdVacunacionUseCase.execute(id);
      if (vacunacion) {
        res.status(200).json(vacunacion);
      } else {
        res.status(404).json({ error: "Vacunacion not found" });
      }
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

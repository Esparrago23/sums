import { Request, Response } from "express";
import { GetAplicacionesPorAnioVacunaUseCase } from "../../application/getAplicacionesPorAnioYVacuna_UseCase";
// 4. Aplicaciones por año y tipo de vacuna

export class GetAplicacionesPorAnioVacuna_Controller {
  constructor(private getAplicacionesPorAnioVacuna: GetAplicacionesPorAnioVacunaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const aplicaciones = await this.getAplicacionesPorAnioVacuna.execute();
      res.status(200).json(aplicaciones);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
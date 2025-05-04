import { Request, Response } from "express";
import { GetPersonasVacunadasPorVacunaUseCase } from "../../application/getPersonasVacunadasPorVacuna_UseCase";
// 3. Número de personas vacunadas por cada vacuna

export class GetPersonasVacunadasPorVacuna_Controller {
  constructor(private getPersonasVacunadasPorVacuna: GetPersonasVacunadasPorVacunaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const personas = await this.getPersonasVacunadasPorVacuna.execute();
      res.status(200).json(personas);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
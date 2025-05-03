import { Request, Response } from "express";
import { GetVacunaDosisAplicacionPorPersonaUseCase } from "../../application/getAplicacionesPorPersona_UseCase";
// 2. Total de aplicaciones por vacuna y tipo de dosis para una persona específica

export class GetVacunaDosisAplicacionPorPersona_Controller {
  constructor(private getVacunaDosisAplicacionPorPersona: GetVacunaDosisAplicacionPorPersonaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const personaId = parseInt(req.params.personaId);
      const aplicaciones = await this.getVacunaDosisAplicacionPorPersona.execute(personaId);
      res.status(200).json(aplicaciones);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
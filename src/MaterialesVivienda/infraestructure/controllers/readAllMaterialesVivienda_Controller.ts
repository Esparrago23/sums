import { Request, Response } from 'express';
import { ReadAllMaterialesViviendaUseCase } from '../../application/readAllMaterialesVivienda_UseCase';

export class ReadAllMaterialesVivienda_Controller {
  constructor(readonly readAllMaterialesViviendaUseCase: ReadAllMaterialesViviendaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const materialesVivienda = await this.readAllMaterialesViviendaUseCase.execute();
      res.status(200).json(materialesVivienda);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }
}
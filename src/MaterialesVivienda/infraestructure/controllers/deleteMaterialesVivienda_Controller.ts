import { Request, Response } from 'express';
import { DeleteMaterialesViviendaUseCase } from '../../application/deleteMaterialesVivienda_UseCase';

export class DeleteMaterialesVivienda_Controller {
  constructor(readonly deleteMaterialesViviendaUseCase: DeleteMaterialesViviendaUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await this.deleteMaterialesViviendaUseCase.execute(id);
      res.status(200).json({ message: 'MaterialesVivienda deleted successfully' });
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }
}
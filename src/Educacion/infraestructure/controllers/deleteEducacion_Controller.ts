import { Request, Response } from "express";
import { DeleteEducacionUseCase } from "../../application/deleteEducacion_UseCase";

export class DeleteEducacion_Controller {
  constructor(private deleteEducacion: DeleteEducacionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id, 10);
      await this.deleteEducacion.execute(id);
      res.status(200).json({ message: "Educacion deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}

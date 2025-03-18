import { Request, Response } from "express";
import { CreateDireccionUseCase } from "../../application/createDireccion_UseCase";

export class CreateDireccion_Controller {
  constructor(private createDireccion: CreateDireccionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const direccionData = req.body;
      const newDireccion = await this.createDireccion.execute(direccionData);
      res.status(201).json(newDireccion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
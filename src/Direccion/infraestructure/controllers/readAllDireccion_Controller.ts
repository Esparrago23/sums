import { Request, Response } from "express";
import { ReadAllDireccionUseCase } from "../../application/readAllDireccion_UseCase";

export class ReadAllDireccion_Controller {
  constructor(private readAllDireccion: ReadAllDireccionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const direcciones = await this.readAllDireccion.execute();
      res.status(200).json(direcciones);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
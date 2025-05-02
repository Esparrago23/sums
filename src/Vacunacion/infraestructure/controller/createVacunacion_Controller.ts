import { Request, Response } from "express";
import { CreateVacunacionUseCase } from "../../application/createVacunacion_UseCase";

export class CreateVacunacion_Controller {
  constructor(private createVacunacion: CreateVacunacionUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const vacunacionData = req.body;

      // Convertir la fecha si viene como string
      if (typeof vacunacionData.fecha_aplicacion === 'string') {
        vacunacionData.fecha_aplicacion = new Date(vacunacionData.fecha_aplicacion);
      }

      const newVacunacion = await this.createVacunacion.execute(vacunacionData);
      res.status(201).json(newVacunacion);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
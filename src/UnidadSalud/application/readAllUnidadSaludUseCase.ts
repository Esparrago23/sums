import { UnidadSalud } from "../domain/entities/UnidadSalud";
import { IUnidadSaludRepository } from "../domain/repositories/IUnidadSaludRepository";

export class ReadAllUnidadSaludUseCase {
  constructor(private unidadSaludRepository: IUnidadSaludRepository) {}

  
  async execute() {
    try {
      console.log("Ejecutando findAll()...");
      const data = await this.unidadSaludRepository.readAll();
      console.log("Datos obtenidos en execute():", data);
      return data;
    } catch (error) {
      console.error("Error en execute():", error);
      throw new Error("Fallo en la consulta de unidades de salud");
    }
  }
}

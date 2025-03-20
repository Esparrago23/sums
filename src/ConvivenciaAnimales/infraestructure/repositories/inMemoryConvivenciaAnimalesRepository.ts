import { ConvivenciaAnimales } from "../../domain/entities/ConvivenciaAnimales";
import { IConvivenciaAnimalesRepository } from "../../domain/repositories/IConvivenciaAnimales";

export class InMemoryConvivenciaAnimalesRepository
  implements IConvivenciaAnimalesRepository
{
  private convivenciasAnimales: ConvivenciaAnimales[] = [];

  create(
    convivenciaAnimales: ConvivenciaAnimales
  ): Promise<ConvivenciaAnimales> {
    this.convivenciasAnimales.push(convivenciaAnimales);
    return Promise.resolve(convivenciaAnimales);
  }

  update(
    convivenciaAnimales: ConvivenciaAnimales
  ): Promise<ConvivenciaAnimales> {
    const index = this.convivenciasAnimales.findIndex(
      (c) => c.id === convivenciaAnimales.id
    );
    if (index !== -1) {
      this.convivenciasAnimales[index] = convivenciaAnimales;
      return Promise.resolve(convivenciaAnimales);
    } else {
      return Promise.reject(new Error("ConvivenciaAnimales not found"));
    }
  }

  readById(id: number): Promise<ConvivenciaAnimales> {
    const convivenciaAnimales = this.convivenciasAnimales.find(
      (c) => c.id === id
    );
    if (convivenciaAnimales) {
      return Promise.resolve(convivenciaAnimales);
    } else {
      return Promise.reject(new Error("ConvivenciaAnimales not found"));
    }
  }

  delete(id: number): Promise<void> {
    this.convivenciasAnimales = this.convivenciasAnimales.filter(
      (c) => c.id !== id
    );
    return Promise.resolve();
  }

  readAll(): Promise<ConvivenciaAnimales[]> {
    return Promise.resolve(this.convivenciasAnimales);
  }
}

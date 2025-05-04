import { User } from "../entities/User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  readAll(): Promise<User[]>;
  readById(id: number): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: number): Promise<void>;
  findByCredentials(nombre_usuario: string, contrasena: string): Promise<User | null>;
}
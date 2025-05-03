import { User } from "../entities/User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  readAll(): Promise<User[]>;
  readById(id: string): Promise<User>;
  update(user: User): Promise<User>;
  delete(id: string): Promise<void>;
  findByCredentials(idUsuario: string, contraseña: string): Promise<User | null>;
}
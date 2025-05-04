// src/User/application/readUserById_UseCase.ts
import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepositoy";

export class ReadUserByIDUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: number): Promise<User | null> {
    return this.userRepository.readById(userId);
  }
}
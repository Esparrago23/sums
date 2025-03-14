import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepositoy";

export class ReadUserByIDUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: string): Promise<User | null> {
    return this.userRepository.readById(userId);
  }
}
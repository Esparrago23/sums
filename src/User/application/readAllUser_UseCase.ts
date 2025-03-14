import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepositoy";

export class ReadAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return this.userRepository.readAll();
  }
}
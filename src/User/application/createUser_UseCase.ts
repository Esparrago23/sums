import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepositoy";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
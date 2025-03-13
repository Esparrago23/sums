import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepositoy";

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: string, userData: Partial<User>): Promise<User | null> {
    const user = await this.userRepository.readById(userId);
    if (!user) {
      return null;
    }

    const updatedUser = { ...user, ...userData };
    return this.userRepository.update(updatedUser);
  }
}
import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepositoy";
import { hashPassword } from "../infraestructure/services/bcrypt";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User): Promise<User> {
    const hashedPassword = await hashPassword(user.contrasena);
    const userWithHashedPassword = { ...user, contrasena: hashedPassword };
    
    return this.userRepository.create(userWithHashedPassword);
  }
}
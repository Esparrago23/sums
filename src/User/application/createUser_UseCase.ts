import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepositoy";
import { hashPassword } from "../infraestructure/services/bcrypt";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: User): Promise<User> {
    // Hash the password before saving
    const hashedPassword = await hashPassword(user.contraseña);
    const userWithHashedPassword = { ...user, contraseña: hashedPassword };
    
    return this.userRepository.create(userWithHashedPassword);
  }
}
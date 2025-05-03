import { IUserRepository } from "../domain/repositories/IUserRepositoy";
import { generateToken } from "../infraestructure/services/jwt";

export class LoginUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(idUsuario: string, contraseña: string): Promise<string | null> {
        try {
            const user = await this.userRepository.findByCredentials(idUsuario, contraseña);
            
            if (!user) {
                return null;
            }

            const token = generateToken(user.idUsuario, user.rol);
            return token;
        } catch (error) {
            return null;
        }
    }
}
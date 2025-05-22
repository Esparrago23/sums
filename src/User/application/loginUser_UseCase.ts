import { IUserRepository } from "../domain/repositories/IUserRepositoy";
import { generateToken } from "../infraestructure/services/jwt";

export class LoginUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(nombre_usuario: string, contrasena: string): Promise<{ token: string, user: Partial<any> } | null> {
        try {
            const user = await this.userRepository.findByCredentials(nombre_usuario, contrasena);
            
            if (!user) {
                return null;
            }

            const token = generateToken(user.id.toString(), user.rol_id.toString());
            
            // Excluimos la contraseña de los datos que enviamos al cliente
            const { contrasena: _, ...userWithoutPassword } = user;
            
            return {
                token,
                user: userWithoutPassword
            };
        } catch (error) {
            return null;
        }
    }
}
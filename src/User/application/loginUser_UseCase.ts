// src/User/application/loginUser_UseCase.ts
import { IUserRepository } from "../domain/repositories/IUserRepositoy";
import { generateToken } from "../infraestructure/services/jwt";

export class LoginUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    async execute(nombre_usuario: string, contrasena: string): Promise<string | null> {
        try {
            const user = await this.userRepository.findByCredentials(nombre_usuario, contrasena);

            if (!user) {
                return null;
            }

            // Obtener el nombre del rol desde la base de datos (necesitarías una consulta adicional)
            // Para simplificar, podemos pasar el rol_id directamente
            const token = generateToken(user.id.toString(), user.rol_id.toString());
            return token;
        } catch (error) {
            return null;
        }
    }
}
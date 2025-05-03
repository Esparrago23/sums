import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/loginUser_UseCase";

export class LoginUser_Controller {
    constructor(private loginUser: LoginUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { idUsuario, contraseña } = req.body;
            const token = await this.loginUser.execute(idUsuario, contraseña);

            if (token) {
                res.status(200).json({ token });
            } else {
                res.status(401).json({ error: "Invalid credentials" });
            }
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }
}
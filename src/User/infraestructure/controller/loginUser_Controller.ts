import { Request, Response } from "express";
import { LoginUserUseCase } from "../../application/loginUser_UseCase";

export class LoginUser_Controller {
    constructor(private loginUser: LoginUserUseCase) {}

    async run(req: Request, res: Response) {
        try {
            const { nombre_usuario, contrasena } = req.body;
            const token = await this.loginUser.execute(nombre_usuario, contrasena);

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
import { Request, Response } from "express";
import { SessionUserUseCase } from "./SessionUserUseCase";

class SessionUserController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { email, password } = req.body

        const sessionUserUseCase = new SessionUserUseCase()

        const token = await sessionUserUseCase.execute(email, password)

        return res.json(token)

    }

}

export { SessionUserController }
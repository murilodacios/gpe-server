import { Request, Response } from "express";
import { ListOneUserUseCase } from "./ListOneUserUseCase";

class ListOneUserController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { email } = req.params

        const listOneUserUseCase = new ListOneUserUseCase()

        const user = await listOneUserUseCase.execute(email)

        return res.json(user)

    }

}

export { ListOneUserController } 
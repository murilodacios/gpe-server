import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {

    async handle(req: Request, res: Response): Promise<Response> {

        const {
            name,
            email,
            password,
            level,
            permissions,
        } = req.body

        const createUserUseCase = new CreateUserUseCase()

        const user = await createUserUseCase.execute({name, email, password, level, permissions})

        return res.json(user)
    }

}

export { CreateUserController }
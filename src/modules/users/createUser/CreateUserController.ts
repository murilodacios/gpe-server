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
            job_id,
        } = req.body

        const createUserUseCase = new CreateUserUseCase()

        const user = await createUserUseCase.execute({name, email, password, level, permissions, job_id})

        return res.json(user)
    }

}

export { CreateUserController }
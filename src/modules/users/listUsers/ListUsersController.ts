import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listUsersUseCase = new ListUsersUseCase()

        const users = await listUsersUseCase.execute()

        return res.json(users)

    }

}

export { ListUsersController }
import { Request, Response } from "express";
import { ListTasksUseCase } from "./ListTasksUseCase";


class ListTasksController {


    async handle(req: Request, res: Response): Promise<Response> {

        const { userId } = req.params

        const listTasksUseCase = new ListTasksUseCase()

        const tasks = await listTasksUseCase.execute(userId)

        return res.json(tasks)
       
    }

}

export { ListTasksController }
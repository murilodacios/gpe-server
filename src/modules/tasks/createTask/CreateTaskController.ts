import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {


    async handle(req: Request, res: Response): Promise<Response> {

        const { description } = req.body
        const { userId } = req.params

        const createTaskUseCase = new CreateTaskUseCase()

        const task = await createTaskUseCase.execute(description, userId)

        return res.json(task)
    }

}

export { CreateTaskController }
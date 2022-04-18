import { Request, Response } from "express";
import { RemoveTaskUseCase } from "./RemoveTaskUseCase";

class RemoveTaskController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        const removeTaskUseCase = new RemoveTaskUseCase()

        await removeTaskUseCase.execute(id)

        return res.status(200).send()

    }

}

export { RemoveTaskController } 
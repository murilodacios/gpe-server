import { Request, Response } from "express";
import { CheckTaskAsDoneUseCase } from "./CheckTaskAsDoneUseCase";

class CheckTaskAsDoneController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        const checkTaskAsDoneUseCase = new CheckTaskAsDoneUseCase()

        const taskChecked = await checkTaskAsDoneUseCase.execute(id)

        return res.json(taskChecked)

    }

}

export { CheckTaskAsDoneController } 
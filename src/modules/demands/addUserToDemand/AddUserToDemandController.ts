import { Request, Response } from "express";
import { AddUserToDemandUseCase } from "./AddUserToDemandUseCase";

class AddUseToDemandController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { userId } = req.body
        const { demandId } = req.params

        const addUserToDemandUseCase = new AddUserToDemandUseCase()

        const userAdd = await addUserToDemandUseCase.execute(userId, demandId)

        return res.json(userAdd)

    }

}

export { AddUseToDemandController } 
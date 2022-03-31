import { Request, Response } from "express";
import { AddAnotationToDemandUseCase } from "./AddAnotationToDemandUseCase";

class AddAnotationToDemandController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { anotacao } = req.body
        const { id } = req.params

        const addAnotationToDemandUseCase = new AddAnotationToDemandUseCase()

        const demand = await addAnotationToDemandUseCase.execute(id, anotacao)

        return res.json(demand)

    }

}

export { AddAnotationToDemandController }
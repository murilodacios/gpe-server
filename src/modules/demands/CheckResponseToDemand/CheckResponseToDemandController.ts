import { Request, Response } from "express";
import { CheckResponseToDemandUseCase } from "./CheckResponseToDemandUseCase";

class CheckResponseToDemandController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { data_resposta } = req.body
        const { id } = req.params

        const checkResponseToDemandUseCase = new CheckResponseToDemandUseCase()

        const demand = await checkResponseToDemandUseCase.execute({ id, data_resposta })

        return res.json(demand)

    }

}

export { CheckResponseToDemandController }
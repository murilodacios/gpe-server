import { Request, Response } from "express";
import { ListOneDemandUseCase } from "./ListOneDemandUseCase";

class ListOneDemandController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { id } = req.params

        const listOneDemandUseCase = new ListOneDemandUseCase()

        const demand = await listOneDemandUseCase.execute(id)

        return res.json(demand)
    }

}

export { ListOneDemandController } 
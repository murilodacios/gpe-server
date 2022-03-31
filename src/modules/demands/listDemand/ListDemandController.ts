import { Request, Response } from "express";
import { ListDemandUseCase } from "./ListDemandUseCase";

class ListDemandController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listDemandUseCase = new ListDemandUseCase()

        const demands = await listDemandUseCase.execute()

        return res.json(demands)
    }

}

export { ListDemandController } 
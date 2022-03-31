import { Request, Response } from "express";
import { DemandSeenByUserUseCase } from "./DemandSeenByUserUseCase";

class DemandSeenByUserController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { userId, seen_date } = req.body
        const { demandId } = req.params

        const demandSeenByUserUseCase = new DemandSeenByUserUseCase()

        const demand = await demandSeenByUserUseCase.execute({userId, seen_date, demandId})

        return res.json(demand)

    }

}

export { DemandSeenByUserController } 
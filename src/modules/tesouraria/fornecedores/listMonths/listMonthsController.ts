import { Request, Response } from "express";
import { ListMonthsUseCase } from "./listMonthsUseCase";

class ListMonthsController {

    async handle(req: Request, res: Response): Promise<Response> {

        const listMonthsUseCase = new ListMonthsUseCase()

        const months = await listMonthsUseCase.execute()

        return res.json(months)

    }

}

export { ListMonthsController }
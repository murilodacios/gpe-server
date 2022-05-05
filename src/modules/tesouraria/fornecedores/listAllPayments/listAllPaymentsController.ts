import { Request, Response } from "express";
import { ListAllPaymentsUseCase } from "./listAllPaymentsUseCase";

class ListAllPaymentsController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { month, secretary, year, takes } = req.query

        const listAllPaymentsUseCase = new ListAllPaymentsUseCase()

        const payments = await listAllPaymentsUseCase.execute({ secretary, month, year, takes })

        return res.json(payments)

    }

}

export { ListAllPaymentsController }
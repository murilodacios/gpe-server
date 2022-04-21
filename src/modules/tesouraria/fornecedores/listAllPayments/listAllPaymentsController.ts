import { Request, Response } from "express";
import { ListAllPaymentsUseCase } from "./listAllPaymentsUseCase";

class ListAllPaymentsController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { month_id, secretary_id } = req.query

        const listAllPaymentsUseCase = new ListAllPaymentsUseCase()

        const payments = await listAllPaymentsUseCase.execute({ secretary_id, month_id })

        return res.json(payments)

    }

}

export { ListAllPaymentsController }
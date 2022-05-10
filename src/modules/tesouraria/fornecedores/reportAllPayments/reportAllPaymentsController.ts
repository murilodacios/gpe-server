import { Request, Response } from "express";
import { ReportAllPaymentsUseCase } from "./reportAllPaymentsUseCase";

class ReportAllPaymentsController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { month, secretary, year} = req.query

        const reportAllPaymentsUseCase = new ReportAllPaymentsUseCase()

        const payments = await reportAllPaymentsUseCase.execute({ secretary, month, year })

        return res.json(payments)

    }

}

export { ReportAllPaymentsController }
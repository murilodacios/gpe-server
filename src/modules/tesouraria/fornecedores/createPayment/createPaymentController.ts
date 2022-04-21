import { Request, Response } from "express";
import { CreatePaymentUseCase } from "./createPaymentUseCase";

class CreatePaymentController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { empresa, processo, assunto, fonte, referencia, valor, pago, month_id, secretary_id } = req.body

        const createPaymentUseCase = new CreatePaymentUseCase()

        const payment = await createPaymentUseCase.execute({empresa, processo, assunto, fonte, referencia, valor, pago, month_id, secretary_id})

        return res.json(payment)

    }

}

export { CreatePaymentController }
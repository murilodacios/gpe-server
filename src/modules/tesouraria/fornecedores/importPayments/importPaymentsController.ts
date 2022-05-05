import { Request, Response } from "express";
import { ImportPaymentsUseCase } from "./importPaymentsUseCase";

class ImportPaymentsController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req
        
        const importPaymentsUseCase = new ImportPaymentsUseCase()

        await importPaymentsUseCase.execute(file)

        return res.status(201).send()
    }

}

export { ImportPaymentsController } 
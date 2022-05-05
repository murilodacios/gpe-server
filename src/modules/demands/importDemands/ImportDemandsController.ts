
import { Request, Response } from "express";
import { ImportDemandsUseCase } from "./ImportDemandsUseCase";

class ImportDemandsController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { file } = req

        const importDemandsUseCase = new ImportDemandsUseCase()

        await importDemandsUseCase.execute(file)

        return res.status(201).send()

    }

}

export { ImportDemandsController } 
import { Request, Response } from "express";
import { ListSecretariesUseCase } from "./listSecretariesUseCase";

class ListSecretariesController {

    async handle(req: Request, res: Response): Promise<Response> {
        
        const listSecretariesUseCase = new ListSecretariesUseCase()

        const secretaries = await listSecretariesUseCase.execute()

        return res.json(secretaries)

    }

}

export { ListSecretariesController }
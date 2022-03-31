import { Request, Response } from "express";
import { CreateJobUseCase } from "./CreateJobUseCase";

class CreateJobController {

    async handle(req: Request, res: Response): Promise<Response> {
        
        const { name, description } = req.body

        const createJobUseCase = new CreateJobUseCase()

        const job = await createJobUseCase.execute({name, description})

        return res.json(job)

    }

}

export { CreateJobController } 
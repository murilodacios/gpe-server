import { Job } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class CreateJobUseCase {

    async execute({
        name,
        description,
    }: Omit<Job, "id">): Promise<Job> {

        const jobExists = await prisma.job.findFirst({
            where: {
                name
            }
        })

        if(jobExists) {
            throw new AppError("Este cargo já existe!")
        }

        try {
            const job = await prisma.job.create({
                data: {
                    name,
                    description
                }
            })

            return job
        } catch {
            throw new AppError("Não foi possível criar este cargo!")
        }

    }

}

export { CreateJobUseCase } 
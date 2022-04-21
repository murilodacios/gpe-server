import { Secretary } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

class ListSecretariesUseCase {

    async execute(): Promise<Secretary[]> {

        try {
            const secretaries = await prisma.secretary.findMany()

            return secretaries
            
        } catch {
            throw new AppError("Não foi possível encontrar as secretarias")
        }

    }

}

export { ListSecretariesUseCase } 
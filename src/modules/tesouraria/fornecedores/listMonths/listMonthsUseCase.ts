import { Month } from "@prisma/client";
import { prisma } from "../../../../db/prismaClient";
import { AppError } from "../../../../shared/errors/AppError";

class ListMonthsUseCase {

    async execute(): Promise<Month[]> {

        try {
            const months = await prisma.month.findMany()

            return months
            
        } catch {
            throw new AppError("Não foi possível encontrar os meses")
        }

    }

}

export { ListMonthsUseCase } 
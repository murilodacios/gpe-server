import { Demand } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class AddAnotationToDemandUseCase {

    async execute(id: string, anotacao: string): Promise<Demand> {

        const demandExists = await prisma.demand.findFirst({
            where: {
                id
            }
        })

        if(!demandExists) {
            throw new AppError("Demanda inexistente ou não encontrada")
        }

        try {
            const demand = await prisma.demand.update({
                data: {
                    anotacao
                },
                where: {
                    id
                }
            })

            return demand
        } catch {
            throw new AppError("Não foi possível adicionar uma anotação a esta demanda")
        }

    }

}

export { AddAnotationToDemandUseCase } 
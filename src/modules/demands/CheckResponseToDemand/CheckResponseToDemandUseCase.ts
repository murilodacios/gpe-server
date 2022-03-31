import { Demand } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class CheckResponseToDemandUseCase {

    async execute({ id, data_resposta }: Pick<Demand, 'id' | 'data_resposta'>): Promise<Demand> {

        //Verifica se a demanda existente

        const demandExists = await prisma.demand.findFirst({
            where: {
                id: id,
            }
        })

        if (!demandExists) {
            throw new AppError("Esta demanda não existe!")
        }

        try {
            const demand = await prisma.demand.update({
                data: {
                    data_resposta: demandExists.data_resposta === null ? data_resposta : null,
                    status: demandExists.status === null ? "Respondido" : null
                },
                where: {
                    id: id,
                }
            })

            return demand
        } catch {
            throw new AppError("Não foi possível marcar a demanda como respondida")
        }

    }

}

export { CheckResponseToDemandUseCase } 
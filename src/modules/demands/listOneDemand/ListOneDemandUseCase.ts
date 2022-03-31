import { Demand } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class ListOneDemandUseCase {

    async execute(id: string): Promise<Omit<Demand, 'userId'>> {

        const demandExists = await prisma.demand.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                numero: true,
                status: true,
                data_resposta: true,
                obs_resposta: true,
                anotacao: true,
                tipo: true,
                orgao_origem: true,
                remetente: true,
                assunto: true,
                setores: true,
                data_emissao: true,
                data_recebimento: true,
                prazo_resposta: true,
                processos: true,
                userId: false,
                user: {
                    select: {
                        name: true,
                        level: true
                    }
                },
                users: {
                    select: {
                        user: {
                            select: {
                                name: true,
                            }
                        }
                    }
                }
            }
        })

        if (!demandExists) {
            throw new AppError("Esta demanda não existe!")
        }

        return demandExists

    }

}

export { ListOneDemandUseCase } 
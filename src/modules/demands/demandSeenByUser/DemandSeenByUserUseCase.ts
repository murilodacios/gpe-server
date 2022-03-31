import { Demand, DemandSeenByUser } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class DemandSeenByUserUseCase {

    async execute({ userId, demandId, seen_date }: Pick<DemandSeenByUser, 'userId' | 'demandId' | 'seen_date'>): Promise<Omit<Demand, 'userId'> | undefined | null> {

        const userExists = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if (!userExists) {
            throw new AppError("Este usuário não existe!")
        }

        const demandExists = await prisma.demand.findFirst({
            where: {
                id: demandId
            }
        })

        if (!demandExists) {
            throw new AppError("Esta demanda não existe")
        }

        const userAlreadySeenDemand = await prisma.demandSeenByUser.findFirst({
            where: {
                userId,
                demandId
            }
        })

        if(userAlreadySeenDemand) {
            return;
        }


        try {

            await prisma.demandSeenByUser.create({
                data: {
                    demandId,
                    userId,
                    seen_date
                }
            })

            const demand = await prisma.demand.findFirst({
                where: {
                    id: demandId
                }, select: {
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
                    },
                    seen_users: {
                        select: {
                            user: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
            })

            return demand

        } catch {
            throw new AppError("Não foi possível cadastrar a visualização do usuáro")
        }

    }

}

export { DemandSeenByUserUseCase }
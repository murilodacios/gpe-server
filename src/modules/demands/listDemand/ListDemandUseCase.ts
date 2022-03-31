import { Demand } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class ListDemandUseCase {

    async execute(): Promise<Omit<Demand, 'userId'>[]> {

        try {
            const demand = await prisma.demand.findMany({
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
                orderBy: {
                    data_emissao: "desc"
                }
            })

            return demand

        } catch {
            throw new AppError("Não foi possível listar as demandas.")
        }

    }

}

export { ListDemandUseCase }
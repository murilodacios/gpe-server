import { Demand } from "@prisma/client";
import { formatISO } from "date-fns";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";
import { verifyUserAdmin } from "../../../utils/verifyUserAdmin";

class CreateDemandUseCase {

    async execute({
        numero,
        tipo,
        orgao_origem,
        remetente,
        assunto,
        setores,
        data_emissao,
        data_recebimento,
        prazo_resposta,
        processos,
        userId
    }: Omit<Demand, 'id' | 'status' | 'data_resposta' | 'obs_resposta' | 'anotacao'>): Promise<Omit<Demand, 'userId'>> {

        //Somente admin pode criar demanda.

        const userExists = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if (!userExists) {
            throw new AppError("Usuário criador não existe!")
        }

        await verifyUserAdmin(userId)

        try {

            const demand = await prisma.demand.create({
                data: {
                    numero,
                    tipo,
                    orgao_origem,
                    remetente,
                    assunto,
                    setores,
                    data_emissao: new Date(`${data_emissao} 00:00`).toISOString(),
                    data_recebimento: new Date(`${data_recebimento} 00:00`).toISOString(),
                    prazo_resposta: new Date(`${prazo_resposta} 00:00`).toISOString(),
                    processos,
                    userId
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
                }
            })

            return demand

        } catch {

            throw new AppError("Não foi possível criar a demanda.")

        }


    }

}

export { CreateDemandUseCase } 
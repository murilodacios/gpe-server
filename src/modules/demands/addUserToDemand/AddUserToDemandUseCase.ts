import { Demand } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { addUserToDemandEmail } from "../../../mail/templates/addUserToDemandEmail";
import { AppError } from "../../../shared/errors/AppError";

class AddUserToDemandUseCase {

    async execute(userId: string, demandId: string): Promise<Demand> {

        //Busca usuário

        const userExists = await prisma.user.findFirst({
            where: {
                id: userId,
            }
        })

        if (!userExists) {
            throw new AppError("Este usuário não existe, logo não pode ser adicionado à demanda.")
        }

        //Busca demanda

        const demand = await prisma.demand.findFirst({
            where: {
                id: demandId,
            }
        })

        if (!demand) {
            throw new AppError("Esta demanda não existe")
        }

        const userExistsOnDemand = await prisma.userOnDemand.findFirst({
            where: {
                userId,
                demandId
            }
        })

        if (userExistsOnDemand) {
            throw new AppError("Usuário já existe na demanda selecionada.")
        }

        try {
            await prisma.userOnDemand.create({
                data: {
                    userId,
                    demandId
                }
            })

            await addUserToDemandEmail(userExists.email, demand)

            const newDemand = await prisma.demand.findFirst({
                where: {
                    id: demandId
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
                    userId: true,
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

            if(!newDemand) {
                throw new AppError("Demanda Inexistente!")
            }

            return newDemand
        } catch {
            throw new AppError("Não foi possível adicionar este usuário a demanda.")
        }



    }

}

export { AddUserToDemandUseCase } 
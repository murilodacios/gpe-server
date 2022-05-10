import { prisma } from "../db/prismaClient"
import { AppError } from "../shared/errors/AppError"

export const verifyUserAdmin = async (userId: string) => {
    const user = await prisma.user.findFirst({
        where: {
            id: userId
        }
    })

    if (!user) {
        throw new AppError("Usuário não existe!")
    }

    if (user.level !== 1 || 2) {
        throw new AppError("Usuário não tem permissão para realizar esta ação")
    }
}
import { User } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class ListOneUserUseCase {

    async execute(email: string): Promise<Pick<User, 'id' | 'email' | 'name' | 'level'>> {

        const user = await prisma.user.findFirst({
            where: {
                email
            },
            select: {
                email: true,
                password: false,
                id: true,
                name: true,
                level: true,
                demands: true
            }
        })

        if(!user) {
            throw new AppError("Usuário não existe!")
        }
        
        return user

    }

}

export { ListOneUserUseCase } 
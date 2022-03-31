import { User } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class ListUsersUseCase {

    async execute(): Promise<Omit<User, "password" | 'job_id'>[]> {

        try {
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    email: true,
                    name: true,
                    job_id: false,
                    job: true,
                    level: true,
                    permissions: true,
                    password: false
                }
            })

            return users
        } catch {
            throw new AppError("Não foi possível listar os usuários")
        }
 
    }

}

export { ListUsersUseCase }
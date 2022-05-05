import { User } from "@prisma/client";
import { hash } from "bcryptjs";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class CreateUserUseCase {

    async execute({
        name,
        email,
        password,
        level,
        permissions,
    }: Omit<User, 'id'>): Promise<Omit<User, 'password'>> {


        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (userExists) {
            throw new AppError("Este usuário já existe!")
        }

        const passwordHashed = await hash(password, 8)

        try {
            const user = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: passwordHashed,
                    level,
                    permissions,
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    level: true,
                    permissions: true,
                    password: false
                }
            })

            return user

        } catch {
            throw new AppError("Não foi possível criar este usuário!")
        }

        

    }

}

export { CreateUserUseCase }
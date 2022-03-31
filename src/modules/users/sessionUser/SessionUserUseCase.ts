import { compare } from "bcryptjs";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";
import { sign } from "jsonwebtoken";

interface IResponse {
    user: {
        name: string;
        email: string;
        level: number;
    }
    token: string;
}

class SessionUserUseCase {

    async execute(email: string, password: string): Promise<IResponse> {

        const userExists = await prisma.user.findFirst({
            where: {
                email
            }
        })

        if (!userExists) {
            throw new AppError("Usuário ou senha incorretos!")
        }

        //Senha correta?

        const passwordMatch = await compare(password, userExists.password)

        if (!passwordMatch) {
            throw new AppError("Usuário ou senha incorretos!")
        }

        //Tudo certo, gere o token.

        const token = sign({}, "0349e1b82f0e13d8088d6cdfe2b2eb67", {
            subject: userExists.id,
            expiresIn: '999d',
        })

        const tokenReturn: IResponse = {
            token,
            user: {
                name: userExists.name,
                email: userExists.email,
                level: userExists.level
            }
        }

        return tokenReturn

    }

}

export { SessionUserUseCase }
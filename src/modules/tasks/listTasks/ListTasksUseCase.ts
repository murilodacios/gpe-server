import { Task } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class ListTasksUseCase {

    async execute(userId: string): Promise<Task[]> {

        const userExists = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if(!userExists) {
            throw new AppError("User doest not exists")
        }

        try {
            const tasks = await prisma.task.findMany({
                where: {
                    userId
                }
            })

            return tasks
        } catch {
            throw new AppError("Não foi possível carregar as tarefas")
        }

    }

}

export { ListTasksUseCase } 
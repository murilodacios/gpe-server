import { Task } from "@prisma/client";
import { prisma } from "../../../db/prismaClient";
import { AppError } from "../../../shared/errors/AppError";

class CreateTaskUseCase {

    async execute(description: string, userId: string): Promise<Task> {

        const userExists = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })

        if(!userExists) {
            throw new AppError("User doest not exists")
        }

        try {

            const task = await prisma.task.create({
                data: {
                    description,
                    completed: false,
                    created_at: new Date().toISOString(),
                    userId,
                }
            })

            return task

        } catch {
            throw new AppError("Task creation failed")
        }

    }

}

export { CreateTaskUseCase } 